import { useEffect } from 'react'
import { PageContainer } from '@/components/layout/PageContainer.tsx'
import { ProgressRingSummary } from '@/components/dashboard/ProgressRingSummary.tsx'
import { QuickActions } from '@/components/dashboard/QuickActions.tsx'
import { TodayWorkoutPreview } from '@/components/dashboard/TodayWorkoutPreview.tsx'
import { DayOverview } from '@/components/dashboard/DayOverview.tsx'
import { StreakCounter } from '@/components/dashboard/StreakCounter.tsx'
import { WeeklyProgress } from '@/components/dashboard/WeeklyProgress.tsx'
import { useProgramDay } from '@/hooks/useProgramDay.ts'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db/database.ts'
import { seedDatabase } from '@/db/seed.ts'
import { todayStr } from '@/utils/dates.ts'
import { PHASE_CONFIGS } from '@/types/program.ts'
import {
  GYM_WEEKDAY_SCHEDULE,
  RECOVERY_WEEKDAY_SCHEDULE,
  WEEKEND_GYM_SCHEDULE,
  REST_DAY_SCHEDULE,
} from '@/data/schedule-templates.ts'
import type { DayType } from '@/types/program.ts'
import type { DaySchedule } from '@/types/schedule.ts'

function getScheduleForDay(dayType: DayType): DaySchedule {
  if (dayType === 'rest') return REST_DAY_SCHEDULE
  if (dayType === 'active_recovery') return RECOVERY_WEEKDAY_SCHEDULE
  if (dayType === 'light_fullbody') return WEEKEND_GYM_SCHEDULE
  return GYM_WEEKDAY_SCHEDULE
}

export default function DashboardPage() {
  useEffect(() => {
    seedDatabase()
  }, [])

  const programDay = useProgramDay()
  const today = todayStr()

  const todayProgress = useLiveQuery(
    () => db.dailyProgress.where('date').equals(today).first(),
    [today]
  )

  const allProgress = useLiveQuery(
    () => db.dailyProgress.orderBy('date').reverse().toArray()
  )

  if (!programDay) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-400 text-sm mt-4">Yukleniyor...</p>
        </div>
      </PageContainer>
    )
  }

  const percentage = todayProgress?.overallPercentage ?? 0
  const phaseLabel = PHASE_CONFIGS[programDay.phase].label
  const schedule = getScheduleForDay(programDay.dayType)

  // Calculate streak
  let currentStreak = 0
  if (allProgress) {
    for (const p of allProgress) {
      if (p.overallPercentage >= 70) {
        currentStreak++
      } else {
        break
      }
    }
  }

  return (
    <PageContainer>
      <div className="space-y-4">
        <ProgressRingSummary
          percentage={percentage}
          dayNumber={programDay.dayNumber}
          phaseLabel={phaseLabel}
        />

        <QuickActions />

        <TodayWorkoutPreview
          dayType={programDay.dayType}
          exerciseCount={programDay.exerciseIds.length}
          isGymDay={programDay.isGymDay}
        />

        <StreakCounter currentStreak={currentStreak} longestStreak={currentStreak} />

        <WeeklyProgress />

        <DayOverview schedule={schedule} />
      </div>
    </PageContainer>
  )
}
