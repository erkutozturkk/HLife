import type { Supplement } from '@/types/nutrition.ts'

export function getSupplements(isGymDay: boolean): Supplement[] {
  const all: Supplement[] = [
    {
      id: 'bcaa',
      name: 'BCAA',
      dose: '1 olcek',
      timing: 'Antrenman oncesi (06:30)',
      taken: false,
      gymDayOnly: true,
    },
    {
      id: 'collagen',
      name: 'Kolajen',
      dose: '1 olcek',
      timing: isGymDay ? 'Sabah (06:30)' : 'Sabah (08:00)',
      taken: false,
      gymDayOnly: false,
    },
    {
      id: 'whey',
      name: 'Whey Protein',
      dose: '1 olcek',
      timing: 'Antrenman sonrasi (08:10)',
      taken: false,
      gymDayOnly: true,
    },
    {
      id: 'creatine',
      name: 'Kreatin',
      dose: '5g',
      timing: isGymDay ? 'Antrenman sonrasi (08:10)' : 'Sabah (08:00)',
      taken: false,
      gymDayOnly: false,
    },
    {
      id: 'biotin',
      name: 'Biotin',
      dose: '1 tablet',
      timing: 'Sabah',
      taken: false,
      gymDayOnly: false,
    },
    {
      id: 'vitamin_d',
      name: 'D Vitamini',
      dose: '1000 IU',
      timing: 'Sabah',
      taken: false,
      gymDayOnly: false,
    },
    {
      id: 'omega3',
      name: 'Omega-3',
      dose: '1 kapsul',
      timing: 'Ogle yemegi ile',
      taken: false,
      gymDayOnly: false,
    },
    {
      id: 'zinc',
      name: 'Cinko',
      dose: '1 tablet',
      timing: 'Aksam',
      taken: false,
      gymDayOnly: false,
    },
  ]

  if (!isGymDay) {
    return all.filter((s) => !s.gymDayOnly)
  }

  return all
}
