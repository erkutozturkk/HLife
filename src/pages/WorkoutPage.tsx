import { useEffect, useState, useCallback } from 'react'
import { PageContainer } from '@/components/layout/PageContainer.tsx'
import { ExerciseCard } from '@/components/workout/ExerciseCard.tsx'
import { BackRehabSection } from '@/components/workout/BackRehabSection.tsx'
import { RestTimer } from '@/components/workout/RestTimer.tsx'
import { Card } from '@/components/common/Card.tsx'
import { ProgressBar } from '@/components/common/ProgressBar.tsx'
import { useProgramDay } from '@/hooks/useProgramDay.ts'
import { EXERCISES } from '@/data/exercises.ts'
import { DAY_LABELS } from '@/data/program-exercises.ts'
import { PHASE_CONFIGS } from '@/types/program.ts'
import { db } from '@/db/database.ts'
import { useLiveQuery } from 'dexie-react-hooks'
import { todayStr } from '@/utils/dates.ts'
import { useAppStore } from '@/stores/appStore.ts'
import type { ExerciseLog } from '@/types/exercise.ts'

export default function WorkoutPage() {
  const programDay = useProgramDay()
  const today = todayStr()
  const [rehabCompleted, setRehabCompleted] = useState<Set<string>>(new Set())

  const workoutLog = useLiveQuery(
    () => db.workoutLogs.where('date').equals(today).first(),
    [today]
  )

  const startRestTimer = useAppStore((s) => s.startRestTimer)

  // Initialize workout log for today
  useEffect(() => {
    if (!programDay || workoutLog !== undefined) return

    const phaseConfig = PHASE_CONFIGS[programDay.phase]
    const targetReps = parseInt(phaseConfig.repsRange.split('-')[0])

    db.workoutLogs.add({
      date: today,
      programDay: programDay.dayNumber,
      dayType: programDay.dayType,
      exercises: programDay.exerciseIds.map((id) => ({
        exerciseId: id,
        sets: Array.from({ length: phaseConfig.sets }, (_, i) => ({
          setNumber: i + 1,
          targetReps,
          actualReps: null,
          weightKg: null,
          completed: false,
        })),
        skipped: false,
      })),
      completed: false,
      startedAt: Date.now(),
      updatedAt: Date.now(),
    })
  }, [programDay, workoutLog, today])

  const handleUpdateLog = useCallback(
    async (exerciseLog: ExerciseLog) => {
      if (!workoutLog?.id) return

      const exercises = workoutLog.exercises.map((e) =>
        e.exerciseId === exerciseLog.exerciseId ? exerciseLog : e
      )

      const allCompleted = exercises.every(
        (e) => e.skipped || e.sets.every((s) => s.completed)
      )

      await db.workoutLogs.update(workoutLog.id, {
        exercises,
        completed: allCompleted,
        updatedAt: Date.now(),
        ...(allCompleted ? { finishedAt: Date.now() } : {}),
      })
    },
    [workoutLog]
  )

  const handleSetComplete = useCallback(() => {
    if (!programDay) return
    const phaseConfig = PHASE_CONFIGS[programDay.phase]
    startRestTimer(phaseConfig.restSeconds)
  }, [programDay, startRestTimer])

  const handleRehabToggle = useCallback((id: string) => {
    setRehabCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  if (!programDay) {
    return (
      <PageContainer title="Antrenman">
        <p className="text-slate-400">Yukleniyor...</p>
      </PageContainer>
    )
  }

  const phaseConfig = PHASE_CONFIGS[programDay.phase]
  const isRestDay = programDay.dayType === 'rest'
  const isRecovery = programDay.dayType === 'active_recovery'

  const totalSets = workoutLog?.exercises.reduce((sum, e) => sum + e.sets.length, 0) ?? 0
  const completedSets = workoutLog?.exercises.reduce(
    (sum, e) => sum + e.sets.filter((s) => s.completed).length,
    0
  ) ?? 0
  const progress = totalSets > 0 ? (completedSets / totalSets) * 100 : 0

  return (
    <PageContainer>
      <RestTimer />

      <div className="space-y-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500">Gun {programDay.dayNumber} / 90</p>
              <h2 className="text-lg font-bold text-slate-100">{DAY_LABELS[programDay.dayType]}</h2>
              <p className="text-xs text-accent mt-0.5">
                {phaseConfig.label} - {phaseConfig.sets}x{phaseConfig.repsRange}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-slate-100">{completedSets}</span>
              <span className="text-sm text-slate-500">/{totalSets}</span>
              <p className="text-[10px] text-slate-500">set</p>
            </div>
          </div>
          <div className="mt-3">
            <ProgressBar percentage={progress} showPercentage />
          </div>
        </Card>

        {isRestDay && (
          <Card>
            <div className="text-center py-4">
              <span className="text-4xl">😴</span>
              <h3 className="text-lg font-bold text-slate-100 mt-2">Dinlenme Gunu</h3>
              <p className="text-sm text-slate-400 mt-1">Bugun sadece bel egzersizlerini yap.</p>
            </div>
          </Card>
        )}

        {isRecovery && (
          <Card>
            <div className="text-center py-4">
              <span className="text-4xl">🧘</span>
              <h3 className="text-lg font-bold text-slate-100 mt-2">Aktif Toparlanma</h3>
              <p className="text-sm text-slate-400 mt-1">20 dk yuruyus + core + bel egzersizleri</p>
            </div>
          </Card>
        )}

        {workoutLog?.exercises.map((exerciseLog) => {
          const exercise = EXERCISES[exerciseLog.exerciseId]
          if (!exercise) return null
          return (
            <ExerciseCard
              key={exerciseLog.exerciseId}
              exercise={exercise}
              log={exerciseLog}
              onUpdateLog={handleUpdateLog}
              onSetComplete={handleSetComplete}
              repsRange={phaseConfig.repsRange}
            />
          )
        })}

        <BackRehabSection
          exerciseIds={programDay.rehabExerciseIds}
          completedIds={rehabCompleted}
          onToggle={handleRehabToggle}
        />
      </div>
    </PageContainer>
  )
}
