import { useState } from 'react'
import type { Exercise, ExerciseLog, ExerciseSet } from '@/types/exercise.ts'
import { DiscSafeBadge } from './DiscSafeBadge.tsx'
import { SetLogger } from './SetLogger.tsx'
import { ExerciseDescription } from './ExerciseDescription.tsx'
import { ExerciseVideo } from './ExerciseVideo.tsx'
import { Badge } from '@/components/common/Badge.tsx'
import { Card } from '@/components/common/Card.tsx'

interface Props {
  exercise: Exercise
  log: ExerciseLog
  onUpdateLog: (log: ExerciseLog) => void
  onSetComplete: () => void
  repsRange: string
}

export function ExerciseCard({ exercise, log, onUpdateLog, onSetComplete, repsRange }: Props) {
  const [showDesc, setShowDesc] = useState(false)
  const [showSets, setShowSets] = useState(true)

  const completedSets = log.sets.filter((s) => s.completed).length
  const totalSets = log.sets.length
  const isComplete = completedSets === totalSets && totalSets > 0

  const handleUpdateSet = (index: number, set: ExerciseSet) => {
    const newSets = [...log.sets]
    newSets[index] = set
    onUpdateLog({ ...log, sets: newSets })
  }

  const handleAddSet = () => {
    const lastSet = log.sets[log.sets.length - 1]
    onUpdateLog({
      ...log,
      sets: [
        ...log.sets,
        {
          setNumber: log.sets.length + 1,
          targetReps: lastSet?.targetReps ?? 10,
          actualReps: null,
          weightKg: lastSet?.weightKg ?? null,
          completed: false,
        },
      ],
    })
  }

  return (
    <Card className={isComplete ? 'border border-success/30' : ''}>
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={`text-sm font-bold ${isComplete ? 'text-success' : 'text-slate-100'}`}>
              {exercise.name}
            </h3>
            <DiscSafeBadge safety={exercise.discSafety} />
          </div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {exercise.muscles.map((m) => (
              <Badge key={m} label={m} />
            ))}
            <span className="text-xs text-slate-500">
              {totalSets}x{repsRange}
            </span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className={`text-xs font-medium ${isComplete ? 'text-success' : 'text-slate-500'}`}>
            {completedSets}/{totalSets}
          </span>
        </div>
      </div>

      {/* Accordion: Nasil Yapilir */}
      <button
        onClick={() => setShowDesc(!showDesc)}
        className="w-full flex items-center justify-between py-2 text-xs text-slate-400 border-t border-slate-700/50"
      >
        <span>Nasil Yapilir</span>
        <svg
          className={`w-4 h-4 transition-transform ${showDesc ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {showDesc && (
        <div className="pb-3 space-y-3">
          <ExerciseDescription exercise={exercise} />
          <ExerciseVideo videoUrl={exercise.videoUrl} />
        </div>
      )}

      {/* Accordion: Setleri Kaydet */}
      <button
        onClick={() => setShowSets(!showSets)}
        className="w-full flex items-center justify-between py-2 text-xs text-slate-400 border-t border-slate-700/50"
      >
        <span>Setleri Kaydet</span>
        <svg
          className={`w-4 h-4 transition-transform ${showSets ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {showSets && (
        <div className="pt-1">
          <SetLogger
            sets={log.sets}
            onUpdateSet={handleUpdateSet}
            onAddSet={handleAddSet}
            onSetComplete={onSetComplete}
          />
        </div>
      )}
    </Card>
  )
}
