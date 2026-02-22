export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'legs'
  | 'glutes'
  | 'core'
  | 'calves'
  | 'forearms'
  | 'full_body'
  | 'rehab'

export type DiscSafety = 'safe' | 'caution' | 'avoid'

export type Equipment =
  | 'barbell'
  | 'dumbbell'
  | 'cable'
  | 'machine'
  | 'bodyweight'
  | 'band'
  | 'bench'
  | 'none'

export interface Exercise {
  id: string
  name: string
  muscles: MuscleGroup[]
  equipment: Equipment[]
  discSafety: DiscSafety
  discNotes: string
  description: string
  tips: string[]
  defaultSets: number
  defaultReps: string
  videoUrl?: string
  alternatives?: string[]
}

export interface ExerciseSet {
  setNumber: number
  targetReps: number
  actualReps: number | null
  weightKg: number | null
  completed: boolean
}

export interface ExerciseLog {
  exerciseId: string
  sets: ExerciseSet[]
  skipped: boolean
  notes?: string
}
