export type PhotoCategory = 'front' | 'side_left' | 'side_right' | 'back'

export interface ProgressPhoto {
  id?: number
  date: string
  programDay: number
  category: PhotoCategory
  blob: Blob
  thumbnailBlob: Blob
  width: number
  height: number
  bodyWeightKg?: number
  notes?: string
  createdAt: number
}

export interface DailyProgress {
  id?: number
  date: string
  programDay: number
  workoutCompleted: boolean
  exercisesCompleted: number
  exercisesTotal: number
  mealsCompleted: number
  mealsTotal: number
  supplementsTaken: number
  supplementsTotal: number
  careCompleted: number
  careTotal: number
  proteinG: number
  waterGlasses: number
  overallPercentage: number
  updatedAt: number
}

export interface BodyStats {
  id?: number
  date: string
  programDay: number
  weightKg?: number
}
