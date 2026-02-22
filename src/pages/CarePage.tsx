import { useEffect, useCallback } from 'react'
import { PageContainer } from '@/components/layout/PageContainer.tsx'
import { Card } from '@/components/common/Card.tsx'
import { ChecklistItem } from '@/components/common/ChecklistItem.tsx'
import { ProgressRing } from '@/components/common/ProgressRing.tsx'
import { useProgramDay } from '@/hooks/useProgramDay.ts'
import { getCareSteps } from '@/data/care-routines.ts'
import { db } from '@/db/database.ts'
import { useLiveQuery } from 'dexie-react-hooks'
import { todayStr } from '@/utils/dates.ts'
import type { CareCategory } from '@/types/care.ts'

const categoryConfig: Record<CareCategory, { label: string; icon: string; color: string }> = {
  skin: { label: 'Cilt Bakimi', icon: '🧴', color: 'text-pink-400' },
  hair: { label: 'Sac Bakimi', icon: '💇', color: 'text-purple-400' },
  oral: { label: 'Agiz Bakimi', icon: '🪥', color: 'text-blue-400' },
}

function shouldShowStep(frequency: string, dayOfWeek: number, dayNumber: number): boolean {
  switch (frequency) {
    case 'daily':
    case 'twice_daily':
      return true
    case 'morning':
      return true
    case 'evening':
      return true
    case 'every_other_day':
      return dayNumber % 2 === 1
    case 'weekly':
      return dayOfWeek === 0 // Sunday
    case 'twice_weekly':
      return dayOfWeek === 1 || dayOfWeek === 4 // Monday, Thursday
    default:
      return true
  }
}

export default function CarePage() {
  const programDay = useProgramDay()
  const today = todayStr()

  const careLog = useLiveQuery(
    () => db.careLogs.where('date').equals(today).first(),
    [today]
  )

  useEffect(() => {
    if (!programDay || careLog !== undefined) return

    const dayOfWeek = new Date(today).getDay()
    const allSteps = getCareSteps()
    const todaySteps = allSteps.filter((s) =>
      shouldShowStep(s.frequency, dayOfWeek, programDay.dayNumber)
    )

    db.careLogs.add({
      date: today,
      programDay: programDay.dayNumber,
      steps: todaySteps,
      updatedAt: Date.now(),
    })
  }, [programDay, careLog, today])

  const toggleStep = useCallback(
    async (stepId: string) => {
      if (!careLog?.id) return
      const steps = careLog.steps.map((s) =>
        s.id === stepId ? { ...s, completed: !s.completed } : s
      )
      await db.careLogs.update(careLog.id, { steps, updatedAt: Date.now() })
    },
    [careLog]
  )

  if (!careLog) {
    return (
      <PageContainer title="Bakim">
        <p className="text-slate-400">Yukleniyor...</p>
      </PageContainer>
    )
  }

  const completedCount = careLog.steps.filter((s) => s.completed).length
  const totalCount = careLog.steps.length
  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  // Group by category
  const grouped = careLog.steps.reduce(
    (acc, step) => {
      if (!acc[step.category]) acc[step.category] = []
      acc[step.category].push(step)
      return acc
    },
    {} as Record<CareCategory, typeof careLog.steps>
  )

  return (
    <PageContainer>
      <div className="space-y-4">
        {/* Progress */}
        <div className="flex flex-col items-center">
          <ProgressRing percentage={percentage} size={100} strokeWidth={8}>
            <div className="text-center">
              <span className="text-xl font-bold text-slate-100">{completedCount}</span>
              <span className="text-sm text-slate-500">/{totalCount}</span>
            </div>
          </ProgressRing>
          <p className="text-xs text-slate-500 mt-2">Bakim rutini</p>
        </div>

        {/* Categories */}
        {(Object.keys(categoryConfig) as CareCategory[]).map((category) => {
          const steps = grouped[category]
          if (!steps || steps.length === 0) return null
          const config = categoryConfig[category]

          return (
            <Card key={category}>
              <h3 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${config.color}`}>
                <span>{config.icon}</span>
                {config.label}
              </h3>
              <div className="space-y-2">
                {steps.map((step) => (
                  <ChecklistItem
                    key={step.id}
                    label={step.name}
                    detail={
                      step.frequencyDetail
                        ? `${step.description} (${step.frequencyDetail})`
                        : step.description
                    }
                    checked={step.completed}
                    onChange={() => toggleStep(step.id)}
                  />
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </PageContainer>
  )
}
