import type { ProgramDay, Phase, DayType } from '@/types/program.ts'
import { DAY_EXERCISES, DAY_REHAB } from './program-exercises.ts'
import { addDays, getDayOfWeek } from '@/utils/dates.ts'
import { PHASE_1_END, PHASE_2_END } from '@/utils/constants.ts'

const WEEK_CYCLE: DayType[] = [
  'chest_triceps',    // Pazartesi (1)
  'back_biceps',      // Sali (2)
  'active_recovery',  // Carsamba (3)
  'legs',             // Persembe (4)
  'shoulders_core',   // Cuma (5)
  'light_fullbody',   // Cumartesi (6)
  'rest',             // Pazar (7)
]

function getPhase(dayNumber: number): Phase {
  if (dayNumber <= PHASE_1_END) return 'adaptation'
  if (dayNumber <= PHASE_2_END) return 'hypertrophy'
  return 'strength'
}

function isWorkday(dayOfWeek: number): boolean {
  return dayOfWeek >= 1 && dayOfWeek <= 5
}

export function generateProgram(startDate: string): ProgramDay[] {
  const days: ProgramDay[] = []

  for (let i = 0; i < 90; i++) {
    const date = addDays(startDate, i)
    const dayOfWeek = getDayOfWeek(date)
    const dayType = WEEK_CYCLE[dayOfWeek - 1]
    const phase = getPhase(i + 1)
    const isGym = dayType !== 'rest' && dayType !== 'active_recovery'

    days.push({
      dayNumber: i + 1,
      date,
      dayType,
      phase,
      isGymDay: isGym,
      isWorkday: isWorkday(dayOfWeek),
      exerciseIds: DAY_EXERCISES[dayType],
      rehabExerciseIds: DAY_REHAB[dayType],
    })
  }

  return days
}

export function getProgramDay(startDate: string, targetDate: string): ProgramDay | null {
  const start = new Date(startDate)
  const target = new Date(targetDate)
  const diffMs = target.getTime() - start.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays < 0 || diffDays >= 90) return null

  const program = generateProgram(startDate)
  return program[diffDays]
}
