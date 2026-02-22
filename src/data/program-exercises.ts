import type { DayType } from '@/types/program.ts'

export const DAY_EXERCISES: Record<DayType, string[]> = {
  chest_triceps: [
    'bench_press',
    'incline_dumbbell_press',
    'cable_fly',
    'triceps_pushdown',
    'overhead_triceps_extension',
  ],
  back_biceps: [
    'lat_pulldown',
    'seated_cable_row',
    'face_pull',
    'barbell_curl',
    'hammer_curl',
  ],
  active_recovery: [],
  legs: [
    'leg_press',
    'leg_curl',
    'leg_extension',
    'hip_thrust',
    'calf_raise',
  ],
  shoulders_core: [
    'seated_shoulder_press',
    'lateral_raise',
    'rear_delt_fly',
    'shrug',
    'plank',
    'dead_bug',
  ],
  light_fullbody: [
    'push_ups',
    'machine_row',
    'leg_press',
    'seated_shoulder_press',
  ],
  rest: [],
}

export const DAY_REHAB: Record<DayType, string[]> = {
  chest_triceps: ['knee_to_chest', 'glute_bridge', 'pelvic_tilt'],
  back_biceps: ['single_knee_to_chest', 'dead_bug', 'cat_cow'],
  active_recovery: [
    'knee_rotation',
    'bird_dog',
    'cobra_press',
    'knee_to_chest',
    'pelvic_tilt',
    'cat_cow',
    'glute_bridge',
  ],
  legs: ['hamstring_stretch', 'glute_bridge'],
  shoulders_core: ['cat_cow', 'knee_to_chest'],
  light_fullbody: ['pelvic_tilt', 'glute_bridge'],
  rest: ['knee_to_chest', 'glute_bridge', 'pelvic_tilt', 'cat_cow'],
}

export const DAY_LABELS: Record<DayType, string> = {
  chest_triceps: 'Gogus + Triceps',
  back_biceps: 'Sirt + Biceps',
  active_recovery: 'Aktif Toparlanma + Bel',
  legs: 'Bacak (Bel Dostu)',
  shoulders_core: 'Omuz + Core',
  light_fullbody: 'Hafif Full Body',
  rest: 'Dinlenme',
}

export const GYM_DAYS: DayType[] = [
  'chest_triceps',
  'back_biceps',
  'legs',
  'shoulders_core',
  'light_fullbody',
]
