import Dexie, { type EntityTable } from 'dexie'
import type { NutritionLog } from '@/types/nutrition.ts'
import type { CareLog } from '@/types/care.ts'
import type { DailyProgress, ProgressPhoto, BodyStats } from '@/types/progress.ts'
import type { ExerciseLog } from '@/types/exercise.ts'

export interface WorkoutLog {
  id?: number
  date: string
  programDay: number
  dayType: string
  exercises: ExerciseLog[]
  completed: boolean
  startedAt?: number
  finishedAt?: number
  updatedAt: number
}

export interface AppSettings {
  key: string
  value: string | number | boolean
}

const db = new Dexie('HLifeDB') as Dexie & {
  settings: EntityTable<AppSettings, 'key'>
  workoutLogs: EntityTable<WorkoutLog, 'id'>
  nutritionLogs: EntityTable<NutritionLog, 'id'>
  careLogs: EntityTable<CareLog, 'id'>
  dailyProgress: EntityTable<DailyProgress, 'id'>
  progressPhotos: EntityTable<ProgressPhoto, 'id'>
  bodyStats: EntityTable<BodyStats, 'id'>
}

db.version(1).stores({
  settings: 'key',
  workoutLogs: '++id, date, programDay',
  nutritionLogs: '++id, date',
  careLogs: '++id, date',
  dailyProgress: '++id, date, programDay',
  progressPhotos: '++id, date, category',
  bodyStats: '++id, date',
})

export { db }
