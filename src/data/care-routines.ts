import type { CareStep } from '@/types/care.ts'

export function getCareSteps(): CareStep[] {
  return [
    // Cilt bakimi
    {
      id: 'skin_wash',
      category: 'skin',
      name: 'Yuz Yikama',
      description: 'Yuz temizleyici ile yuzunuzu yikayin',
      frequency: 'evening',
      completed: false,
    },
    {
      id: 'skin_moisturize',
      category: 'skin',
      name: 'Nemlendirici',
      description: 'Temiz yuze nemlendirici uygulayin',
      frequency: 'evening',
      completed: false,
    },
    {
      id: 'skin_retinol',
      category: 'skin',
      name: 'Retinol',
      description: 'Nemlendirici sonrasi retinol serum uygulayin',
      frequency: 'every_other_day',
      frequencyDetail: 'Gunasiri uygula',
      completed: false,
    },
    {
      id: 'skin_sunscreen',
      category: 'skin',
      name: 'Gunes Kremi',
      description: 'SPF 30+ gunes kremi uygulayin',
      frequency: 'morning',
      completed: false,
    },

    // Sac bakimi
    {
      id: 'hair_minoxidil_am',
      category: 'hair',
      name: 'Minoxidil (Sabah)',
      description: 'Kuru sac derisine %5 minoxidil uygulayin',
      frequency: 'morning',
      completed: false,
    },
    {
      id: 'hair_minoxidil_pm',
      category: 'hair',
      name: 'Minoxidil (Aksam)',
      description: 'Kuru sac derisine %5 minoxidil uygulayin',
      frequency: 'evening',
      completed: false,
    },
    {
      id: 'hair_dermaroller',
      category: 'hair',
      name: 'Dermaroller',
      description: '0.5mm dermaroller ile sac derisi uygulamasi',
      frequency: 'weekly',
      frequencyDetail: 'Haftada 1 - Pazar gunu',
      completed: false,
    },
    {
      id: 'hair_shampoo',
      category: 'hair',
      name: 'Ketoconazole Sampuan',
      description: 'Ketoconazole iceren sampuan ile yikayin',
      frequency: 'twice_weekly',
      frequencyDetail: 'Haftada 2 kez',
      completed: false,
    },

    // Agiz bakimi
    {
      id: 'oral_brush',
      category: 'oral',
      name: 'Dis Fircalama',
      description: 'En az 2 dakika dis fircalayin',
      frequency: 'evening',
      completed: false,
    },
    {
      id: 'oral_floss',
      category: 'oral',
      name: 'Dis Ipi',
      description: 'Tum dislerin arasini dis ipi ile temizleyin',
      frequency: 'evening',
      completed: false,
    },
    {
      id: 'oral_mouthwash',
      category: 'oral',
      name: 'Gargara',
      description: 'Agiz gargarasi ile 30 saniye gargaralayin',
      frequency: 'evening',
      completed: false,
    },
  ]
}
