import type { Meal } from '@/types/nutrition.ts'

export function getGymDayMeals(): Meal[] {
  return [
    {
      id: 'meal_kahvalti',
      name: 'Kahvalti',
      time: '06:20',
      completed: false,
      items: [
        {
          name: '3-4 Haslanmis Yumurta',
          portion: '3-4 adet',
          proteinG: 21,
          completed: false,
        },
        {
          name: 'Lor Peyniri',
          portion: '100g',
          proteinG: 11,
          completed: false,
        },
        {
          name: 'Tam Bugday Ekmek',
          portion: '1 dilim',
          proteinG: 3,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_ogle',
      name: 'Ogle Yemegi',
      time: '12:30',
      completed: false,
      items: [
        {
          name: 'Tavuk Gogsu',
          portion: '250g',
          proteinG: 55,
          completed: false,
        },
        {
          name: 'Yesil Salata',
          portion: '1 porsiyon',
          proteinG: 2,
          completed: false,
        },
        {
          name: 'Pilav',
          portion: '1 porsiyon',
          proteinG: 4,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_antrenman_sonrasi',
      name: 'Antrenman Sonrasi',
      time: '08:10',
      completed: false,
      items: [
        {
          name: 'Whey Protein Shake',
          portion: '1 olcek',
          proteinG: 25,
          completed: false,
        },
        {
          name: 'Muz',
          portion: '1 adet',
          proteinG: 1,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_aksam',
      name: 'Aksam Yemegi',
      time: '18:30',
      completed: false,
      items: [
        {
          name: 'Kiyma / Et',
          portion: '200g',
          proteinG: 40,
          completed: false,
        },
        {
          name: 'Sebze Garnitur',
          portion: '1 porsiyon',
          proteinG: 3,
          completed: false,
        },
        {
          name: 'Yogurt',
          portion: '1 kase',
          proteinG: 5,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_gece',
      name: 'Gece Atistirmasi',
      time: '21:00',
      completed: false,
      items: [
        {
          name: 'Lor Peyniri veya Yogurt',
          portion: '100g',
          proteinG: 11,
          completed: false,
        },
      ],
    },
  ]
}

export function getRestDayMeals(): Meal[] {
  return [
    {
      id: 'meal_kahvalti',
      name: 'Kahvalti',
      time: '08:00',
      completed: false,
      items: [
        {
          name: '3-4 Haslanmis Yumurta',
          portion: '3-4 adet',
          proteinG: 21,
          completed: false,
        },
        {
          name: 'Lor Peyniri',
          portion: '100g',
          proteinG: 11,
          completed: false,
        },
        {
          name: 'Tam Bugday Ekmek',
          portion: '1 dilim',
          proteinG: 3,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_ogle',
      name: 'Ogle Yemegi',
      time: '12:30',
      completed: false,
      items: [
        {
          name: 'Tavuk Gogsu',
          portion: '250g',
          proteinG: 55,
          completed: false,
        },
        {
          name: 'Yesil Salata',
          portion: '1 porsiyon',
          proteinG: 2,
          completed: false,
        },
        {
          name: 'Pilav',
          portion: '1 porsiyon',
          proteinG: 4,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_aksam',
      name: 'Aksam Yemegi',
      time: '18:30',
      completed: false,
      items: [
        {
          name: 'Kiyma / Et',
          portion: '200g',
          proteinG: 40,
          completed: false,
        },
        {
          name: 'Sebze Garnitur',
          portion: '1 porsiyon',
          proteinG: 3,
          completed: false,
        },
        {
          name: 'Yogurt',
          portion: '1 kase',
          proteinG: 5,
          completed: false,
        },
      ],
    },
    {
      id: 'meal_gece',
      name: 'Gece Atistirmasi',
      time: '21:00',
      completed: false,
      items: [
        {
          name: 'Lor Peyniri veya Yogurt',
          portion: '100g',
          proteinG: 11,
          completed: false,
        },
      ],
    },
  ]
}
