export type DayType =
  | 'chest_triceps'
  | 'back_biceps'
  | 'active_recovery'
  | 'legs'
  | 'shoulders_core'
  | 'light_fullbody'
  | 'rest'

export type Phase = 'adaptation' | 'hypertrophy' | 'strength'

export interface ProgramDay {
  dayNumber: number
  date: string
  dayType: DayType
  phase: Phase
  isGymDay: boolean
  isWorkday: boolean
  exerciseIds: string[]
  rehabExerciseIds: string[]
}

export interface PhaseConfig {
  phase: Phase
  label: string
  sets: number
  repsRange: string
  restSeconds: number
}

export const PHASE_CONFIGS: Record<Phase, PhaseConfig> = {
  adaptation: {
    phase: 'adaptation',
    label: 'Adaptasyon',
    sets: 3,
    repsRange: '12-15',
    restSeconds: 60,
  },
  hypertrophy: {
    phase: 'hypertrophy',
    label: 'Hipertrofi',
    sets: 4,
    repsRange: '8-12',
    restSeconds: 90,
  },
  strength: {
    phase: 'strength',
    label: 'Guc + Hacim',
    sets: 4,
    repsRange: '6-10',
    restSeconds: 120,
  },
}
