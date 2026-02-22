import { db } from './database.ts'
import type { WorkoutLog } from './database.ts'
import type { NutritionLog } from '@/types/nutrition.ts'
import type { CareLog } from '@/types/care.ts'

export async function getOrCreateWorkoutLog(
  date: string,
  programDay: number,
  dayType: string,
  exerciseIds: string[],
  defaultSets: number,
  defaultReps: number
): Promise<WorkoutLog> {
  const existing = await db.workoutLogs.where('date').equals(date).first()
  if (existing) return existing

  const log: WorkoutLog = {
    date,
    programDay,
    dayType,
    exercises: exerciseIds.map((id) => ({
      exerciseId: id,
      sets: Array.from({ length: defaultSets }, (_, i) => ({
        setNumber: i + 1,
        targetReps: defaultReps,
        actualReps: null,
        weightKg: null,
        completed: false,
      })),
      skipped: false,
    })),
    completed: false,
    updatedAt: Date.now(),
  }

  const id = await db.workoutLogs.add(log)
  return { ...log, id }
}

export async function getOrCreateNutritionLog(
  date: string,
  programDay: number,
  meals: NutritionLog['meals'],
  supplements: NutritionLog['supplements']
): Promise<NutritionLog> {
  const existing = await db.nutritionLogs.where('date').equals(date).first()
  if (existing) return existing

  const log: NutritionLog = {
    date,
    programDay,
    meals,
    supplements,
    waterGlasses: 0,
    totalProteinG: 0,
    updatedAt: Date.now(),
  }

  const id = await db.nutritionLogs.add(log)
  return { ...log, id }
}

export async function getOrCreateCareLog(
  date: string,
  programDay: number,
  steps: CareLog['steps']
): Promise<CareLog> {
  const existing = await db.careLogs.where('date').equals(date).first()
  if (existing) return existing

  const log: CareLog = {
    date,
    programDay,
    steps,
    updatedAt: Date.now(),
  }

  const id = await db.careLogs.add(log)
  return { ...log, id }
}
