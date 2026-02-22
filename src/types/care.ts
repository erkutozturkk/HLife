export type CareCategory = 'skin' | 'hair' | 'oral'

export type CareFrequency =
  | 'daily'
  | 'morning'
  | 'evening'
  | 'twice_daily'
  | 'every_other_day'
  | 'weekly'
  | 'twice_weekly'

export interface CareStep {
  id: string
  category: CareCategory
  name: string
  description: string
  frequency: CareFrequency
  frequencyDetail?: string
  completed: boolean
}

export interface CareLog {
  id?: number
  date: string
  programDay: number
  steps: CareStep[]
  updatedAt: number
}
