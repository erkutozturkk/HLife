import type { DaySchedule } from '@/types/schedule.ts'

export const GYM_WEEKDAY_SCHEDULE: DaySchedule = {
  label: 'Antrenman Gunu (Pazartesi, Sali, Persembe, Cuma)',
  blocks: [
    { time: '06:15', label: 'Uyan', type: 'wake' },
    { time: '06:20', label: 'Kahvalti', type: 'meal' },
    { time: '06:30', label: 'BCAA + Kolajen', type: 'supplement' },
    { time: '06:40', label: 'Evden cik', type: 'other' },
    { time: '07:00', label: 'Antrenman', type: 'workout', duration: '70dk' },
    { time: '08:10', label: 'Whey + Kreatin', type: 'supplement' },
    { time: '08:15', label: 'Spor salonundan cik', type: 'other' },
    { time: '08:30', label: 'Mesai basla', type: 'work' },
    { time: '12:30', label: 'Ogle yemegi', type: 'meal' },
    { time: '15:00', label: 'Su hatirlatmasi', type: 'other' },
    { time: '17:30', label: 'Mesai biter', type: 'work' },
    { time: '18:30', label: 'Aksam yemegi', type: 'meal' },
    { time: '20:00', label: 'Bel egzersizleri', type: 'rehab', duration: '5dk' },
    { time: '21:00', label: 'Gece atistirmasi', type: 'meal' },
    { time: '21:30', label: 'Bakim rutini', type: 'care', duration: '20dk' },
    { time: '22:30', label: 'Yataga gir', type: 'other' },
    { time: '23:00', label: 'Uyu', type: 'sleep' },
  ],
}

export const RECOVERY_WEEKDAY_SCHEDULE: DaySchedule = {
  label: 'Aktif Toparlanma (Carsamba)',
  blocks: [
    { time: '06:30', label: 'Uyan', type: 'wake' },
    {
      time: '07:00',
      label: 'Kahvalti + Kreatin + Kolajen',
      type: 'meal',
      detail: 'Takviyeler kahvalti ile birlikte',
    },
    { time: '08:30', label: 'Mesai basla', type: 'work' },
    { time: '10:00', label: 'Yuruyus', type: 'workout', duration: '20dk' },
    {
      time: '10:30',
      label: 'Core + Bel egzersizleri',
      type: 'rehab',
      duration: '10dk',
    },
    { time: '12:30', label: 'Ogle yemegi', type: 'meal' },
    { time: '17:30', label: 'Mesai biter', type: 'work' },
    { time: '18:30', label: 'Aksam yemegi', type: 'meal' },
    { time: '21:00', label: 'Gece atistirmasi', type: 'meal' },
    { time: '21:30', label: 'Bakim rutini', type: 'care' },
    { time: '23:00', label: 'Uyu', type: 'sleep' },
  ],
}

export const WEEKEND_GYM_SCHEDULE: DaySchedule = {
  label: 'Hafta Sonu Antrenman (Cumartesi)',
  blocks: [
    { time: '07:00', label: 'Uyan', type: 'wake' },
    {
      time: '07:30',
      label: 'Kahvalti + BCAA + Kolajen',
      type: 'meal',
      detail: 'Takviyeler kahvalti ile birlikte',
    },
    {
      time: '08:30',
      label: 'Hafif antrenman',
      type: 'workout',
      duration: '45dk',
    },
    { time: '09:15', label: 'Whey + Kreatin', type: 'supplement' },
    {
      time: '10:00',
      label: 'Bel egzersizleri',
      type: 'rehab',
      duration: '5dk',
    },
    { time: '13:00', label: 'Ogle yemegi', type: 'meal' },
    { time: '18:30', label: 'Aksam yemegi', type: 'meal' },
    { time: '21:00', label: 'Gece atistirmasi', type: 'meal' },
    { time: '21:30', label: 'Bakim rutini', type: 'care' },
    {
      time: '--:--',
      label: 'Uyku',
      type: 'sleep',
      detail: 'Cuma/Cumartesi: uyku saati serbest',
    },
  ],
}

export const REST_DAY_SCHEDULE: DaySchedule = {
  label: 'Dinlenme Gunu (Pazar)',
  blocks: [
    { time: '08:00', label: 'Uyan', type: 'wake' },
    {
      time: '08:30',
      label: 'Kahvalti + Kreatin + Kolajen',
      type: 'meal',
      detail: 'Takviyeler kahvalti ile birlikte',
    },
    {
      time: '10:00',
      label: 'Bel egzersizleri',
      type: 'rehab',
      duration: '5dk',
    },
    { time: '13:00', label: 'Ogle yemegi', type: 'meal' },
    { time: '18:30', label: 'Aksam yemegi', type: 'meal' },
    { time: '21:00', label: 'Gece atistirmasi', type: 'meal' },
    { time: '21:30', label: 'Bakim rutini', type: 'care' },
    { time: '23:00', label: 'Uyu', type: 'sleep' },
  ],
}
