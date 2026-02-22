export interface ScheduleBlock {
  time: string
  label: string
  type: 'wake' | 'meal' | 'supplement' | 'workout' | 'work' | 'care' | 'rehab' | 'sleep' | 'other'
  detail?: string
  duration?: string
}

export interface DaySchedule {
  label?: string
  blocks: ScheduleBlock[]
}
