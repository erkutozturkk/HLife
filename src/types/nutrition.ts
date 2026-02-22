export interface MealItem {
  name: string
  portion: string
  proteinG: number
  completed: boolean
}

export interface Meal {
  id: string
  name: string
  time: string
  items: MealItem[]
  completed: boolean
}

export interface Supplement {
  id: string
  name: string
  dose: string
  timing: string
  taken: boolean
  gymDayOnly: boolean
}

export interface NutritionLog {
  id?: number
  date: string
  programDay: number
  meals: Meal[]
  supplements: Supplement[]
  waterGlasses: number
  totalProteinG: number
  updatedAt: number
}
