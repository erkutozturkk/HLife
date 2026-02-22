import type { Exercise } from '@/types/exercise.ts'

export const EXERCISES: Record<string, Exercise> = {
  // ═══════════════════════════════════════════════════════════════
  // DAY 1 - CHEST + TRICEPS
  // ═══════════════════════════════════════════════════════════════

  bench_press: {
    id: 'bench_press',
    name: 'Bench Press',
    muscles: ['chest', 'triceps', 'shoulders'],
    equipment: ['machine', 'dumbbell', 'bench'],
    discSafety: 'safe',
    discNotes: 'Makine veya dumbbell ile yapildiginda bel fitigi icin guvenlidir. Sirt bench uzerinde duz olmali, ayaklar yere sabit basmalidir. Beli asiri kavislendirmekten kacinin.',
    description:
      'Bench uzerine sirt ustU yatin ve ayaklarinizi yere duz basin. Omuz kapaklarinizi geriye cekin ve gogus kafesinizi hafifce yukari itin. Dumbbellari veya makine kollarini gogsunuzun iki yaninda, dirsekler 45 derece acikta olacak sekilde tutun. Nefes vererek agirligi yukari itin, kollar tam uzanana kadar devam edin. KontrollU bir sekilde agirligi baslangic noktasina indirin. Hareket boyunca belinizi bench\'e yapisik tutun, asiri bel kavisi yapmayin.',
    tips: [
      'Omuz kapaklarini geriye cekip bench\'e yapisik tutun',
      'Ayaklariniz yere sabit basmali, bacaklarinizla itme yapmayin',
      'Beli asiri kavislendirmeyin, hafif dogal kavsi koruyun',
      'Dirsekleri 45 derece acida tutarak omuz yaralanmasini onleyin',
      'Nefes kontrolu: indirirken nefes alin, iterken verin',
    ],
    defaultSets: 4,
    defaultReps: '10-12',
    alternatives: ['incline_dumbbell_press', 'cable_fly'],
  },

  incline_dumbbell_press: {
    id: 'incline_dumbbell_press',
    name: 'Incline Dumbbell Press',
    muscles: ['chest', 'shoulders', 'triceps'],
    equipment: ['dumbbell', 'bench'],
    discSafety: 'safe',
    discNotes: 'Bench 30-45 derece arasinda ayarlandiginda bel fitigi icin guvenlidir. Sirt tamamen bench\'e yaslanmali ve bel boslugu minimumda tutulmalidir.',
    description:
      'Bench\'i 30-45 derece egime ayarlayin. Dumbbellari iki elinize alin ve bench\'e yaslanarak oturun. Sirtinizi tamamen bench\'e yaslayin ve omuz kapaklarinizi geriye cekin. Dumbbellari omuz hizasinda, avuc icleriniz one bakacak sekilde tutun. Nefes vererek dumbbellari yukari itin ve ust noktada hafifce birbirine yaklastirin. Kontrolllu sekilde baslangic pozisyonuna geri donun. Bu hareket ust gogsu hedefler ve gogus kaslariniza farkli bir acidan calistirir.',
    tips: [
      'Bench acisini 30-45 derece arasinda tutun, daha fazlasi omzu yorar',
      'Sirtinizi tamamen bench\'e yaslayin, bel boslugu birakmayin',
      'Dumbbellari indirirken dirsekleri 45 derece acik tutun',
      'Ust noktada dumbbellari birbirine carpmayin, hafifce yaklastirin',
      'Hareketi kontrollU yapin, momentum kullanmayin',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['bench_press', 'cable_fly'],
  },

  cable_fly: {
    id: 'cable_fly',
    name: 'Cable Fly',
    muscles: ['chest'],
    equipment: ['cable'],
    discSafety: 'safe',
    discNotes: 'Kablo makinesi sabit bir hareket yolu sagladigi icin bel fitigi icin guvenlidir. Govde dik ve sabit kalmali, belden bukUlmemelidir.',
    description:
      'Kablo makinelerini omuz hizasina ayarlayin ve her iki tarafa da uygun agirlik koyun. Makinelerin ortasinda durun, her iki kabloyu da tutun ve bir adim one atin. Govdenizi hafifce one egin ama belden bukUlmeyin. Kollarinizi iki yana acin, dirsekleriniz hafifce kirik olsun. Nefes vererek kollarinizi onunuzde birlestirin, gogus kaslarinizi sikistirin. Kontrolllu sekilde kollarinizi tekrar yana acin. Hareket boyunca govdeniz sabit kalmali, sadece omuz ekleminden hareket olmalidir.',
    tips: [
      'Dirsekleri hafifce kirik tutun, tam duz kilitlemeyin',
      'Govdenizi sabit tutun, ileri geri sallanmayin',
      'Kollar birlestiginde gogsu 1-2 saniye sikin',
      'Negatif fazda (geri acilirken) yavas ve kontrollU olun',
      'Cok agir yuklemekten kacinin, bu bir izolasyon hareketidir',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['bench_press', 'incline_dumbbell_press'],
  },

  triceps_pushdown: {
    id: 'triceps_pushdown',
    name: 'Triceps Pushdown',
    muscles: ['triceps'],
    equipment: ['cable'],
    discSafety: 'safe',
    discNotes: 'Kablo makinesiyle yapilan bu hareket bel fitigi icin guvenlidir. Govde dik ve sabit tutulmali, agirlik iterken belden bukUlmemelidir.',
    description:
      'Kablo makinesine duz bar veya V-bar takin ve makaraya en ust pozisyona ayarlayin. Makinenin onunde ayakta durun, ayaklar omuz genisliginde acik olsun. Bar\'i ust kavrama (overhand grip) ile tutun ve dirseklerinizi govdenizin yanina yapisik tutun. Nefes vererek bar\'i asagi dogru itin, kollariniz tam uzanana kadar devam edin. En alt noktada triceps kaslarinizi 1 saniye sikin. Kontrolllu sekilde bar\'i baslangic noktasina geri getirin. Dirsekleriniz hareket boyunca govdenizin yaninda sabit kalmalidir.',
    tips: [
      'Dirseklerinizi govdenizin yanina kilitli tutun, acilmasina izin vermeyin',
      'Govdenizi one egmeyin, dik durun',
      'Sadece on kol hareket etmeli, ust kol sabit kalmali',
      'En alt noktada triceps\'i sikarak doruk kasilma yapin',
      'Kontrolllu tempo kullanin, agirligi sallandirmayin',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['overhead_triceps_extension'],
  },

  overhead_triceps_extension: {
    id: 'overhead_triceps_extension',
    name: 'Overhead Triceps Extension',
    muscles: ['triceps'],
    equipment: ['cable'],
    discSafety: 'caution',
    discNotes: 'Dikkatli yapilmalidir. Kablo makinesiyle otururak yapilmasi onerilir. Ayakta yapildiginda bele binen yuk artabilir. Beli asiri kavislendirmekten kacinin ve core kaslarini siki tutun.',
    description:
      'Kablo makinesini en alt pozisyona ayarlayin ve ip (rope) aparatini takin. Makineye sirtinizi donun ve ipi baskin arkasinda tutun. Bir adim one atin ve govdenizi hafifce one egin. Dirsekleriniz baskin yaninda sabit kalmali. Nefes vererek ipi baskin ustunden one dogru uzatin, kollariniz tam uzanana kadar devam edin. En ust noktada triceps\'i sikin. Kontrolllu sekilde baslangic noktasina geri donun. Core kaslarinizi hareket boyunca siki tutarak belinizi koruyun.',
    tips: [
      'Core kaslarini siki tutarak beli koruyun',
      'Dirsekleri baskin yaninda sabit tutun, acilmasina izin vermeyin',
      'Mumkunse oturarak yapmayi tercih edin (bel icin daha guvenli)',
      'Cok agir yuklemekten kacinin, kontrol onemlidir',
      'Ip aparatini kullanarak bileklere daha az yuk bindirin',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['triceps_pushdown'],
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 2 - BACK + BICEPS
  // ═══════════════════════════════════════════════════════════════

  lat_pulldown: {
    id: 'lat_pulldown',
    name: 'Lat Pulldown',
    muscles: ['back', 'biceps'],
    equipment: ['cable', 'machine'],
    discSafety: 'safe',
    discNotes: 'Makine destekli oldugundan bel fitigi icin guvenlidir. Oturarak yapilir ve bele minimum yuk bindirir. Geriye asiri yaslanmaktan kacinin.',
    description:
      'Lat pulldown makinesine oturun ve diz pedini bacaklariniza sabitleyin. Genis bar\'i omuz genisliginden biraz daha genis, ust kavrama ile tutun. Gogsunuzu yukari kaldirin ve omuz kapaklarinizi geriye cekin. Nefes vererek bar\'i gogsunuzun ust kismina dogru cekin, dirseklerinizi asagi ve geriye yonlendirin. Bar gogsunuze degdiginde sirt kaslarinizi 1 saniye sikin. Kontrolllu sekilde bar\'i baslangic pozisyonuna geri birakarak kollarin tam uzanmasini saglayin. Geriye asiri yaslanmaktan kacinin, govde hafifce arkaya yatik olabilir ama sabit kalmalidir.',
    tips: [
      'Gogsunuzu yukari kaldirarak sirt kaslarini daha iyi aktive edin',
      'Bar\'i boyun arkasina degil, gogus ustune cekin',
      'Geriye asiri yaslanmayin, hafif aci yeterlidir',
      'Hareketi kollardan degil, sirttan baslatmayi hedefleyin',
      'Bar\'i birakirken kontrollU olun, serbest birakmayin',
    ],
    defaultSets: 4,
    defaultReps: '10-12',
    alternatives: ['seated_cable_row', 'machine_row'],
  },

  seated_cable_row: {
    id: 'seated_cable_row',
    name: 'Seated Cable Row',
    muscles: ['back', 'biceps'],
    equipment: ['cable', 'machine'],
    discSafety: 'safe',
    discNotes: 'Oturarak yapildigi ve gogus dayamasi oldugu icin bel fitigi icin guvenlidir. Belden ileri geri bukUlmekten kacinin, govde dik ve sabit kalmalidir.',
    description:
      'Seated row makinesine oturun, ayaklarinizi ayak dayanagina basin ve dizlerinizi hafifce kirik tutun. V-bar veya genis bar\'i tutun. Gogsunuzu yukari kaldirin, sirtinizi duz tutun ve omuz kapaklarinizi geriye cekin. Nefes vererek bar\'i karnin alt kismina dogru cekin, dirseklerinizi vucudunuzun yanindan geriye gotUrUn. En son noktada sirt kaslarinizi 1-2 saniye sikin. Kontrolllu sekilde agirligi baslangic noktasina geri birakarak iyice gerin. Hareket boyunca govdeniz dik ve sabit kalmali, belden bukUlmemelisiniz.',
    tips: [
      'Belden ileri geri sallanmayin, govde sabit kalmali',
      'Cekisi kollardan degil, sirt kaslariyla baslatin',
      'Omuz kapaklarini geriye cekerek doruk kasilmayi hissedin',
      'Dizleri hafifce kirik tutun, tam kilitlemeyin',
      'Negatif fazda (geri birakma) yavas ve kontrollU olun',
    ],
    defaultSets: 4,
    defaultReps: '10-12',
    alternatives: ['lat_pulldown', 'machine_row'],
  },

  face_pull: {
    id: 'face_pull',
    name: 'Face Pull',
    muscles: ['shoulders', 'back'],
    equipment: ['cable'],
    discSafety: 'safe',
    discNotes: 'Hafif agirlikla yapildigi icin bel fitigi icin guvenlidir. Omuz sagligi ve durus duzeltme icin mukemmel bir harekettir. Govde sabit tutulmalidir.',
    description:
      'Kablo makinesini yuz hizasina ayarlayin ve ip (rope) aparatini takin. Ipi her iki elinizle, basparmaklar yukari bakacak sekilde tutun. Bir iki adim geri atarak kabloda gerginlik olusturun. Nefes vererek ipi yuzunuze dogru cekin, dirseklerinizi yana ve geriye acin. Son pozisyonda elleriniz kulaklarinizin yaninda olmali ve omuz kapaklariniz tamamen geriye cekilmis olmali. Bu pozisyonda 1-2 saniye tutun ve kontrolllu sekilde baslangica donun. Bu hareket arka omuz ve ust sirt kaslarini guclendirir, durus bozukluklarini duzeltir.',
    tips: [
      'Hafif agirlik kullanin, bu bir izolasyon hareketidir',
      'Dirsekleri omuz hizasinda veya ustunde tutun',
      'Omuz kapaklarini maksimum geriye cekin',
      'Govdeyi sabit tutun, geriye yaslanarak cekmeyin',
      'Her tekrarda doruk noktada 1-2 saniye tutun',
    ],
    defaultSets: 3,
    defaultReps: '15-20',
    alternatives: ['rear_delt_fly'],
  },

  barbell_curl: {
    id: 'barbell_curl',
    name: 'Barbell Curl',
    muscles: ['biceps', 'forearms'],
    equipment: ['barbell'],
    discSafety: 'caution',
    discNotes: 'Ayakta yapildigi icin dikkatli olunmalidir. Agir yuklerde bele binen yuk artar. Core kaslarini siki tutun, govdeyi sallamaktan kacinin. Mumkunse EZ bar tercih edin.',
    description:
      'Ayakta durun, ayaklar omuz genisliginde acik olsun. Barbell\'i alt kavrama (underhand grip) ile omuz genisliginde tutun. Kollariniz vucudunuzun yaninda tam uzanmis olmali. Core kaslarinizi sikin ve sirtinizi duz tutun. Nefes vererek barbell\'i yukari kaldirin, sadece on kol hareket etmeli. Dirsekleriniz vucudunuzun yaninda sabit kalmali. En ust noktada biceps\'i 1 saniye sikin ve kontrolllu sekilde baslangica indirin. Govdenizi sallamak icin momentum kullanmayin, bu bele zarar verebilir.',
    tips: [
      'Govdeyi sallamaktan kacinin, bu bele zarar verir',
      'Dirsekleri vucudun yaninda sabit tutun',
      'Asiri agir yuklemekten kacinin, kontrol onemlidir',
      'EZ bar kullanarak bileklere daha az yuk bindirin',
      'Core kaslarini siki tutarak beli koruyun',
      'Geriye yaslanarak kaldirmayin',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['hammer_curl'],
  },

  hammer_curl: {
    id: 'hammer_curl',
    name: 'Hammer Curl',
    muscles: ['biceps', 'forearms'],
    equipment: ['dumbbell'],
    discSafety: 'caution',
    discNotes: 'Ayakta yapildigi icin dikkatli olunmalidir. Dumbbell ile tek tarafli yapilabilir, bu bele daha az yuk bindirir. Govdeyi sallamamaya dikkat edin.',
    description:
      'Ayakta durun, ayaklar omuz genisliginde acik olsun. Her iki elinize birer dumbbell alin, avuc icleriniz birbirine bakacak sekilde (notr kavrama) tutun. Kollariniz vucudunuzun yaninda tam uzanmis olmali. Core kaslarinizi sikin. Nefes vererek dumbbellari yukari kaldirin, avuc ici pozisyonunu degistirmeyin. Dirsekleriniz vucudunuzun yaninda sabit kalmali. En ust noktada 1 saniye tutun ve kontrolllu sekilde indirin. Tek kollu yapmak isterseniz sira ile yapabilirsiniz, bu daha iyi konsantrasyon saglar.',
    tips: [
      'Avuc iclerini birbirine bakacak sekilde tutun, doNdUrmeyin',
      'Govdeyi sallamamaya ozen gosterin',
      'Tek kollu yaparak daha iyi konsantrasyon saglayabilirsiniz',
      'Core kaslarini siki tutarak beli koruyun',
      'Kontrolllu tempo kullanin, hem yukari hem asagi fazda',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['barbell_curl'],
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 4 - LEGS (DISC SAFE)
  // ═══════════════════════════════════════════════════════════════

  leg_press: {
    id: 'leg_press',
    name: 'Leg Press',
    muscles: ['legs', 'glutes'],
    equipment: ['machine'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi icin guvenli bir bacak hareketidir. Sirt dayamasi sayesinde bele yuk binmez. Kalcanizi platformdan kaldirmayin ve dizleri gogse asiri cekmeyin.',
    description:
      'Leg press makinesine oturun, sirtinizi tamamen dayamaya yaslayin. Ayaklarinizi platforma omuz genisliginde yerlestirin, ayak uclar hafifce disari donuk olsun. Emniyet kollarini serbest birakin. Nefes alarak agirligi yavas yavas indirin, dizleriniz 90 derece aciya gelene kadar devam edin. Kalcaniz oturaktan kalkmamali. Nefes vererek agirligi yukari itin, dizleri tam kilitlemeyin. Hareket boyunca sirtiniz dayamaya yapisik kalmalidir. Dizleri gogse asiri cekmek bel uzerinde basinc olusturur, buna dikkat edin.',
    tips: [
      'Sirtinizi tamamen dayamaya yaslayin ve hareket boyunca kaldirmayin',
      'Kalcanizi oturaktan kaldirmayin, bu beli zorlar',
      'Dizleri 90 derecenin otesine bukmeyin',
      'Dizleri tam kilitlemeyin, hafifce kirik birakin',
      'Ayak pozisyonunu degistirerek farkli kaslari hedefleyebilirsiniz',
      'Nefes alarak indirin, nefes vererek kaldirin',
    ],
    defaultSets: 4,
    defaultReps: '10-12',
    alternatives: ['leg_extension', 'leg_curl'],
  },

  leg_curl: {
    id: 'leg_curl',
    name: 'Leg Curl',
    muscles: ['legs'],
    equipment: ['machine'],
    discSafety: 'safe',
    discNotes: 'Makine destekli oldugundan bel fitigi icin guvenlidir. Yuzustü veya oturarak yapilabilir. Hamstring kaslarini izole eder ve bele minimum yuk bindirir.',
    description:
      'Leg curl makinesine pozisyon alin (yatarak veya oturarak). Ayak bileklerinizi ped\'in altina yerlestirin. Oturak veya yatisyeri uygun yukseklige ayarlayin, diz eksleminiz makinenin donme noktasiyla ayni hizada olmali. Nefes vererek bacaklarinizi bukun, pedleri kalcaniza dogru cekin. En son noktada hamstring kaslarinizi 1-2 saniye sikin. Kontrolllu sekilde baslangic pozisyonuna geri donun. Hareketi yavaS ve kontrollU yapin, momentum kullanmayin.',
    tips: [
      'Diz eksleminizi makinenin donme noktasina hizalayin',
      'Kalcanizi yerden kaldirmayin (yatan pozisyonda)',
      'En son noktada hamstring\'i sikarak doruk kasilma yapin',
      'Negatif fazda (geri birakma) yavas olun',
      'Cok agir yuklemekten kacinin, kontrol onemlidir',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['leg_press', 'hip_thrust'],
  },

  leg_extension: {
    id: 'leg_extension',
    name: 'Leg Extension',
    muscles: ['legs'],
    equipment: ['machine'],
    discSafety: 'safe',
    discNotes: 'Makine destekli oldugundan bel fitigi icin guvenlidir. Oturarak yapilir ve bele hicbir yuk binmez. Quadriceps kaslarini izole eder.',
    description:
      'Leg extension makinesine oturun, sirtinizi dayamaya yaslayin. Ayak bileklerinizi ped\'in altina yerlestirin. Diz eksleniniz makinenin donme noktasiyla ayni hizada olmali. Elleri yanlarindaki tutma yerlerinden tutun. Nefes vererek bacaklarinizi oNe dogru uzatin, dizler tam uzanana kadar devam edin. En ust noktada quadriceps kaslarinizi 1-2 saniye sikin. Kontrolllu sekilde baslangic pozisyonuna geri donun. Agirlik inerken frenlemeyi unutmayin.',
    tips: [
      'Sirtinizi dayamaya yapisik tutun',
      'Diz eksleninizi makinenin donme noktasina hizalayin',
      'En ust noktada quadriceps\'i sikarak doruk kasilma yapin',
      'Negatif fazda kontrollU olun, agirligi serbest birakmayin',
      'Diz probleminiz varsa tam uzanma yerine kismi aciklik kullanin',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['leg_press'],
  },

  hip_thrust: {
    id: 'hip_thrust',
    name: 'Hip Thrust',
    muscles: ['glutes', 'legs'],
    equipment: ['barbell', 'bench'],
    discSafety: 'caution',
    discNotes: 'Dogru teknikle yapildiginda genelde guvenlidir ancak dikkatli olunmalidir. Beli asiri kavislendirmekten kacinin. Glute kaslarini aktive ederek hareket edin, belden degil. Agirlik kademeli olarak arttirilmalidir.',
    description:
      'Bir bench\'in kenarinda ust sirtinizi yaslayin, omuz kapaklariniz bench\'in ustunde olmali. Ayaklarinizi yere basin, dizleriniz 90 derece bukUk olsun. Barbell\'i kalca kemiklerinizin ustune yerlestirin (ped kullanin). Kalcaniz yerde olmali. Nefes vererek kalcanizi yukari kaldirin, govdeniz dizlerle ayni hizaya gelene kadar devam edin. En ust noktada glute kaslarinizi maksimum sikin ve 1-2 saniye tutun. Kontrolllu sekilde kalcanizi tekrar yere indirin. Beli asiri kavislendirmekten kacinin, hareket kalcadan baslamalidir.',
    tips: [
      'Omuz kapaklarini bench\'e yaslayin, boyun degil',
      'Ust noktada beli asiri kavislendirmeyin',
      'Glute kaslarini sikarak hareket edin, belden degil',
      'Barbell\'in altina ped koyarak kalca kemigini koruyun',
      'Ayaklariniz yere sabit basmali, kaymamalI',
      'Ceneyi gogse dogru cekin, boyun notr kalmali',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['glute_bridge', 'leg_press'],
  },

  calf_raise: {
    id: 'calf_raise',
    name: 'Calf Raise',
    muscles: ['calves'],
    equipment: ['machine'],
    discSafety: 'safe',
    discNotes: 'Makine ile yapildiginda bel fitigi icin guvenlidir. Oturarak yapilan calf raise makinesi bele hicbir yuk bindirmez. Ayakta yapilan versiyonda da bele minimal yuk biner.',
    description:
      'Oturarak yapilan calf raise makinesine oturun (seated calf raise tercih edin). Ayak uclarinizi platforma yerlestirin, topuklariniz asagida sarkik olmali. Diz pedini bacaklarinizin ustune ayarlayin. Nefes vererek topuklarinizi yukari kaldirin, ayak uclarinizin uzerinde yukselin. En ust noktada baldirlarinizi 1-2 saniye sikin. Kontrolllu sekilde topuklarinizi tekrar asagiya indirin ve baldirlarinizi iyice gerin. Tam hareket genisliginde calisin: en alta indirin, en yukari kaldirin.',
    tips: [
      'Tam hareket genisliginde calisin (full range of motion)',
      'En ust noktada baldirlarinizi sikarak doruk kasilma yapin',
      'En alt noktada iyi bir gerginlik hissetmelisiniz',
      'Hareket yavas ve kontrollU olmali, ziplamak yok',
      'Oturarak yapilan versiyonu bel icin daha guvenlidir',
    ],
    defaultSets: 4,
    defaultReps: '15-20',
    alternatives: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 5 - SHOULDERS + CORE
  // ═══════════════════════════════════════════════════════════════

  seated_shoulder_press: {
    id: 'seated_shoulder_press',
    name: 'Seated Shoulder Press',
    muscles: ['shoulders', 'triceps'],
    equipment: ['machine'],
    discSafety: 'safe',
    discNotes: 'Makine ile oturarak yapildigi icin bel fitigi icin guvenlidir. Sirt dayamasi sayesinde bele binen yuk minimumdadir. Ayakta barbell press yapmaktan kacinin.',
    description:
      'Shoulder press makinesine oturun, sirtinizi tamamen dayamaya yaslayin. Ayaklarinizi yere duz basin. Makine kollarini omuz hizasinda tutun, dirsekleriniz 90 derece bukUk olmali. Nefes vererek agirligi yukari itin, kollar tam uzanana kadar devam edin ama dirsekleri tam kilitlemeyin. Kontrolllu sekilde agirligi omuz hizasina geri indirin. Hareket boyunca sirtiniz dayamaya yapisik kalmali, beli kavislendirmeyin. Makine destekli oldugu icin omuz eklemine daha az stres biner.',
    tips: [
      'Sirtinizi tamamen dayamaya yaslayin',
      'Beli kavislendirmeyin, core kaslarini siki tutun',
      'Dirsekleri tam kilitlemeyin, hafifce kirik birakin',
      'Agirligi kontrollU indirin, serbest birakmayin',
      'Boyun ve omuzlarda gerginlik hissederseniz agirligi azaltin',
    ],
    defaultSets: 4,
    defaultReps: '10-12',
    alternatives: ['lateral_raise'],
  },

  lateral_raise: {
    id: 'lateral_raise',
    name: 'Lateral Raise',
    muscles: ['shoulders'],
    equipment: ['dumbbell'],
    discSafety: 'caution',
    discNotes: 'Ayakta yapildiginda dikkatli olunmalidir. Hafif agirlik kullanin ve govdeyi sallamamaya dikkat edin. Oturarak yapmak bel icin daha guvenlidir.',
    description:
      'Ayakta veya oturarak (oturmak bel icin daha guvenli) durun. Her iki elinize hafif birer dumbbell alin, kollariniz vucudunuzun yaninda olsun. Govdenizi hafifce one egin. Nefes vererek dumbbellari iki yana dogru kaldirin, omuz hizasina kadar devam edin. Dirsekleriniz hafifce kirik olmali ve kaldiris sirasinda dirsekler bileklerden yukarda olmali. En ust noktada 1 saniye tutun ve kontrolllu sekilde baslangica indirin. Cok agir yuklemekten kacinin, bu bir izolasyon hareketidir ve hafif agirlikla daha etkilidir.',
    tips: [
      'Hafif agirlik kullanin, form agirliktan onemlidir',
      'Govdeyi sallamamaya dikkat edin, momentum kullanmayin',
      'Omuz hizasinin Ustune kaldirmayin',
      'Dirsekler bileklerden yukarda olmali (su dokuyormus gibi)',
      'Mumkunse oturarak yapin, bel icin daha guvenlidir',
      'Yavas tempo kullanin, ozellikle indirirken',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['seated_shoulder_press'],
  },

  rear_delt_fly: {
    id: 'rear_delt_fly',
    name: 'Rear Delt Fly',
    muscles: ['shoulders', 'back'],
    equipment: ['dumbbell', 'machine', 'cable'],
    discSafety: 'safe',
    discNotes: 'Makine ile yapildiginda bel fitigi icin guvenlidir. Dumbbell ile yapildiginda bench uzerinde yUzustU yatarak yapmak bel icin en guvenli yontemdir. Ayakta one egilmek beli zorlayabilir.',
    description:
      'Reverse fly makinesine oturun (en guvenli yontem) veya bench uzerinde yuzustu yatin. Makine kullaniyorsaniz gogus dayanagina yaslanin ve kollari geriye dogru acin. Dumbbell kullaniyorsaniz bench uzerinde yuzustu yatarak, hafif dumbbellari asagi sarkit pozisyondan iki yana dogru kaldirin. Dirsekleriniz hafifce kirik olmali. Kollarinizi omuz hizasina kadar kaldirin ve arka omuz kaslarinizi sikin. 1-2 saniye tutun ve kontrolllu sekilde baslangica donun. Hafif agirlik kullanarak hareketin kalitesine odaklanin.',
    tips: [
      'Makine versiyonu bel icin en guvenlidir',
      'Hafif agirlik kullanin, bu bir izolasyon hareketidir',
      'Dirsekleri hafifce kirik tutun',
      'Omuz kapaklarini geriye cekerek arka omuzu hedefleyin',
      'Ayakta one egilmek yerine bench veya makine tercih edin',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: ['face_pull'],
  },

  shrug: {
    id: 'shrug',
    name: 'Shrug',
    muscles: ['shoulders', 'back'],
    equipment: ['dumbbell', 'barbell'],
    discSafety: 'caution',
    discNotes: 'Ayakta agirlik tutularak yapildigi icin dikkatli olunmalidir. Cok agir yuklemekten kacinin. Govdeyi sallamamaya dikkat edin ve core kaslarini siki tutun.',
    description:
      'Ayakta durun, ayaklar omuz genisliginde acik olsun. Her iki elinize birer dumbbell alin, kollariniz vucudunuzun yaninda tam uzanmis olmali. Core kaslarinizi sikin ve sirtinizi duz tutun. Nefes vererek omuzlarinizi kulaklariniza dogru yukari kaldirin. Kollariniz duz kalmali, sadece omuz hareketi olmali. En ust noktada trapez kaslarinizi 1-2 saniye sikin. Kontrolllu sekilde omuzlari baslangic pozisyonuna geri indirin. Omuzlari dondurmeyin, sadece yukari-asagi hareket yapin.',
    tips: [
      'Sadece yukari-asagi hareket yapin, omuzlari dondurmeyin',
      'Core kaslarini siki tutarak beli koruyun',
      'Cok agir yuklemekten kacinin, kontrollU hareket edin',
      'Kollar duz kalmali, dirsekleri bukmeyin',
      'En ust noktada 1-2 saniye sikarak doruk kasilma yapin',
    ],
    defaultSets: 3,
    defaultReps: '12-15',
    alternatives: [],
  },

  plank: {
    id: 'plank',
    name: 'Plank',
    muscles: ['core'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi icin guvenli ve onerilen bir core hareketidir. Omurga notr pozisyonda kalmali, bel asagi cukmemeli veya yukari cikmamalidir. Core stabilitesini artirarak beli korur.',
    description:
      'Yere yuzustu pozisyona gelin. On kollarinizi yere koyun, dirsekleriniz omuz hizasinda olsun. Ayak uclarinizi yere basin ve vucudunuzu yerden kaldirin. Vucudunuz basdan topuklara kadar duz bir cizgi olusturmali. Karin kaslarinizi sikin, kalcanizi ne asagi dusUrun ne de yukari kaldirin. Bel bolgesi notr pozisyonda kalmalidir. Bu pozisyonu belirlenen sure boyunca koruyun. Nefes almanizi kesmeyin, duzgun ve ritmik nefes alin. Form bozulursa dinlenin ve tekrar baslatin.',
    tips: [
      'Vucudunuz duz bir cizgi olmali, kalca dusmesin',
      'Karin kaslarini siki tutarak beli koruyun',
      'Nefes almayi kesmeyin',
      'Basit bakarak boyun notr pozisyonda tutun',
      'Form bozuldugunda devam etmeyin, dinlenip tekrar baslatin',
      'Sureyi kademeli olarak artirin',
    ],
    defaultSets: 3,
    defaultReps: '30-60sn',
    alternatives: ['dead_bug'],
  },

  dead_bug: {
    id: 'dead_bug',
    name: 'Dead Bug',
    muscles: ['core', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi icin cok guvenli ve onerilen bir harekettir. Sirt ustU yapilir ve omurga notr pozisyonda kalir. Core stabilitesini artirarak bel sagligini destekler.',
    description:
      'Sirt ustu yere uzanin. Kollarinizi tavana dogru uzatin ve bacaklarinizi masaustu pozisyonuna getirin (dizler 90 derece bukuk, baldirlar yere paralel). Belinizi yere yapisik tutun, arada bosluk olmamali. Karsi kol ve karsi bacagi ayni anda yavas yavas uzatin: sag kolu baskin arkasina, sol bacagi yere dogru uzatin. Bacak ve kol yere degmeden durdurun. Baslangic pozisyonuna donun ve diger tarafla tekrarlayin. Hareket boyunca bel yere yapisik kalmalidir; eger beliniz yerden kalkiyorsa hareket genisligini azaltin.',
    tips: [
      'Beli yere yapisik tutun, arada bosluk olmamali',
      'Hareketi yavas ve kontrollU yapin',
      'Kol ve bacak yere degmemeli, havada durdurun',
      'Bel yerden kalkiyorsa hareket genisligini azaltin',
      'Nefes vererek uzatin, nefes alarak geri cekin',
      'Bu hareket crunches\'dan cok daha guvenli bir core egzersizidir',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['plank', 'bird_dog'],
  },

  // ═══════════════════════════════════════════════════════════════
  // DAY 6 - LIGHT FULL BODY
  // ═══════════════════════════════════════════════════════════════

  push_ups: {
    id: 'push_ups',
    name: 'Push-ups',
    muscles: ['chest', 'triceps', 'shoulders', 'core'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'caution',
    discNotes: 'Dogru formla yapildiginda genelde guvenlidir ancak dikkatli olunmalidir. Core kaslarini siki tutarak belin cukmesini engelleyin. Bel agrisi hissederseniz dizler uzerinde modifiye versiyon yapin.',
    description:
      'Yere yuzustu pozisyona gelin, ellerinizi omuz genisliginden biraz daha genis yere koyun. Ayak uclariniz yere basmali, vucudunuz basdan topuklara kadar duz bir cizgi olusturmali. Core kaslarinizi sikin. Nefes alarak vucudunuzu kontrollU sekilde yere dogru indirin, gogsuNuz yere yaklasana kadar devam edin. Dirsekleriniz 45 derece acikta olmali. Nefes vererek vucudunuzu yukari itin, baslangic pozisyonuna donun. Bel bolgesi hareket boyunca duz kalmali, ne asagi cukmeli ne de yukari cikmali. Eger zor geliyorsa dizler uzerinde yaparak baslayabilirsiniz.',
    tips: [
      'Vucudunuz duz bir cizgi olmali, bel cukmemeli',
      'Core kaslarini siki tutarak beli koruyun',
      'Dirsekleri 45 derece acida tutun, 90 derece acmayin',
      'Zor geliyorsa dizler uzerinde yapin',
      'Her tekrarda tam asagi inin ve tam yukari cikin',
      'Bel agrisi hissederseniz durun',
    ],
    defaultSets: 3,
    defaultReps: '10-15',
    alternatives: ['bench_press'],
  },

  machine_row: {
    id: 'machine_row',
    name: 'Machine Row',
    muscles: ['back', 'biceps'],
    equipment: ['machine'],
    discSafety: 'safe',
    discNotes: 'Makine destekli ve gogus dayamali oldugundan bel fitigi icin cok guvenlidir. Gogus dayamasi sayesinde bele hicbir yuk binmez. Bel fitigi olanlarin sirt calismak icin en guvenli tercihlerinden biridir.',
    description:
      'Machine row (gogus dayamali sira cekme) makinesine oturun. Gogsunuzu dayamaya yaslayin ve ayaklarinizi yere basin. Makine kollarini tutun, kollariniz one uzanmis olmali. Nefes vererek kollari geriye cekin, dirseklerinizi vucudunuzun yanindann geriye goturun. Omuz kapaklarini geriye cekin ve sirt kaslarinizi sikin. En son noktada 1-2 saniye tutun. Kontrolllu sekilde baslangic pozisyonuna geri donun. Gogus dayamasi sayesinde bele yuk binmez, bu nedenle bel fitigi olanlar icin ideal bir sirt hareketidir.',
    tips: [
      'Gogsunuzu tamamen dayamaya yaslayin',
      'Cekisi kollardan degil, sirt kaslariyla baslatin',
      'Omuz kapaklarini geriye cekerek doruk kasilma yapin',
      'Kontrolllu tempo kullanin, momentum yapmayin',
      'Bu hareket bel fitigi icin en guvenli sirt hareketlerinden biridir',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['seated_cable_row', 'lat_pulldown'],
  },

  // ═══════════════════════════════════════════════════════════════
  // REHAB - BEL EGZERSIZLERI (DAILY)
  // ═══════════════════════════════════════════════════════════════

  knee_to_chest: {
    id: 'knee_to_chest',
    name: 'Diz Gogse Cekme',
    muscles: ['rehab', 'core'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin temel egzersizlerden biridir. Bel kaslarini gerer ve rahatlama saglar. Yavasce ve kontrollU yapilmalidir.',
    description:
      'Sirt ustu yere uzanin, dizlerinizi bukun ve ayaklarinizi yere basin. Ellerinizle her iki dizinizi kavrayin ve yavasca gogsunuze dogru cekin. Bu pozisyonda bel bolgenizin hafifce yere yapistigini hissetmelisiniz. 15-30 saniye boyunca bu pozisyonda kalin ve derin nefes alin. Dizleri birakarak baslangic pozisyonuna donun. Bu hareket bel kaslarini gerer, omurga araligini acar ve bel bolgesindeki gerginligi azaltir. Agrili hissederseniz cekme mesafesini azaltin.',
    tips: [
      'Hareketi yavas ve kontrollU yapin, ani cekmeler yapmayin',
      'Her tekrarda 15-30 saniye tutun',
      'Derin ve ritmik nefes alin',
      'Agrili olursa cekme mesafesini azaltin',
      'Basi yere koyun, boynu kaldirmayin',
      'Bu hareketi her gun sabah ve aksam yapabilirsiniz',
    ],
    defaultSets: 3,
    defaultReps: '15-30sn',
    alternatives: ['single_knee_to_chest', 'pelvic_tilt'],
  },

  glute_bridge: {
    id: 'glute_bridge',
    name: 'Kopru / Glute Bridge',
    muscles: ['glutes', 'core', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi icin cok guvenli ve onerilen bir egzersizdir. Glute kaslarini guclendirir ve beli destekler. Kalcayi asiri yuksege kaldirarak beli kavislendirmekten kacinin.',
    description:
      'Sirt ustu yere uzanin, dizlerinizi bukun ve ayaklarinizi omuz genisliginde yere basin. Kollariniz vucudunuzun yaninda, avuc icleriniz asagi bakacak sekilde olsun. Karin kaslarinizi sikin. Nefes vererek kalcanizi yavasca yerden kaldirin, omuzlardan dizlere kadar duz bir cizgi olusana kadar devam edin. Bu pozisyonda glute kaslarinizi sikin ve 2-3 saniye tutun. Kontrolllu sekilde kalcanizi tekrar yere indirin. Kalcayi asiri yuksege kaldirarak beli kavislendirmekten kacinin. Bu hareket glute kaslarini guclendirir ve bel bolgesini destekler.',
    tips: [
      'Kalcayi asiri yuksege kaldirmayin, bel kavis yapmamali',
      'En ust noktada glute kaslarini sikin',
      'Ayaklar yere sabit basmali, kaymamalI',
      'Nefes vererek kaldirin, nefes alarak indirin',
      'Hareketi yavas ve kontrollU yapin',
      'Her gun yapilabilecek guvenli bir egzersizdir',
    ],
    defaultSets: 3,
    defaultReps: '10-15',
    alternatives: ['pelvic_tilt', 'hip_thrust'],
  },

  pelvic_tilt: {
    id: 'pelvic_tilt',
    name: 'Pelvis Tilt',
    muscles: ['core', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin en temel ve en guvenli egzersizlerden biridir. Bel kaslarini guclendirir ve omurga farkindaliGini arttirir. Her seviyedeki hasta icin uygundur.',
    description:
      'Sirt ustu yere uzanin, dizlerinizi bukun ve ayaklarinizi yere basin. Belinizle yer arasindaki dogal boslugu hissedin. Karin kaslarinizi sikarak belinizi yere dogru basin, bel boslugu kapanmali. Bu pozisyonda 5-10 saniye tutun ve nefes almayi kesmeyin. Gevseyin ve belinizin dogal kavisine donmesine izin verin. Bu cok kucuk ama cok onemli bir harekettir. Core kaslarinin dogru calismasini ogreten temel bir egzersizdir. Bel fitigi tedavisinde ilk ogretilen hareketlerdendir.',
    tips: [
      'Belinizi yere yapisik tutmayi hedefleyin',
      'Kucuk bir hareket ama cok etkilidir',
      'Nefes almayi kesmeyin, hareket sirasinda nefes verin',
      'Her tekrarda 5-10 saniye tutun',
      'GunUn her saati yapabilirsiniz, yatakta bile',
      'Bu hareket diger tum core egzersizlerinin temelidir',
    ],
    defaultSets: 3,
    defaultReps: '10-15',
    alternatives: ['dead_bug', 'knee_to_chest'],
  },

  cat_cow: {
    id: 'cat_cow',
    name: 'Cat-Cow',
    muscles: ['core', 'back', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin guvenli ve cok faydalI bir egzersizdir. Omurgayi nazikce hareket ettirir ve esneklik saglar. Ani ve sert hareketlerden kacinin, yavas ve kontrollU yapin.',
    description:
      'Dort ayak pozisyonuna gelin: eller omuz hizasinda, dizler kalca hizasinda yere bassin. Kollar duz, sirt notr pozisyonda olsun. Nefes vererek sirtinizi tavana dogru yuvarlatin (kedi pozisyonu): basIniz asagi baksin, karniniz iceri cekilsin, kuyruk sokumu asagi donuk olsun. 2-3 saniye tutun. Nefes alarak sirtinizi asagi dogru cukurlastin (inek pozisyonu): basIniz yukari baksin, gogus one acilsin, kuyruk sokumu yukari donuk olsun. 2-3 saniye tutun. Bu iki pozisyon arasinda yavas yavas gecis yapin. Omurgayi omur omur hareket ettirmeyi hedefleyin.',
    tips: [
      'Hareketi yavas ve akici yapin, ani gecisler yapmayin',
      'Omurgayi omur omur hareket ettirmeyi hedefleyin',
      'Nefes ile hareketi eslesturin: nefes ver = kedi, nefes al = inek',
      'Eller ve dizler kaymamalI, sabit kalmali',
      'Agrili hissederseniz hareket genisligini azaltin',
      'Sabah kalktiginda yapmak icin harika bir egzersizdir',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['pelvic_tilt', 'bird_dog'],
  },

  bird_dog: {
    id: 'bird_dog',
    name: 'Bird-Dog',
    muscles: ['core', 'back', 'glutes', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin cok guvenli ve etkili bir egzersizdir. Core stabilitesini arttirir ve omurga notr pozisyonda kalir. Prof. Stuart McGill tarafindan bel sagligi icin onerilen temel egzersizlerdendir.',
    description:
      'Dort ayak pozisyonuna gelin: eller omuz hizasinda, dizler kalca hizasinda yere bassin. Sirtiniz duz ve notr pozisyonda olmali. Karin kaslarinizi sikin. Ayni anda sag kolunuzu one ve sol bacaginizi arkaya dogru uzatin. Kol, sirt ve bacak duz bir cizgi olusturmali. Bu pozisyonda 3-5 saniye tutun, govdeniz sallanmamali. Baslangica donun ve diger tarafla tekrarlayin (sol kol, sag bacak). Hareket boyunca kalcaniz yana dondugu hissediyorsaniz hareketi kucultun. Bu egzersiz core stabilitesi ve denge icin mukemmeldir.',
    tips: [
      'Govdenin sallanmasini engelleyin, kalca yana donmemeli',
      'Kol, sirt ve bacak duz bir cizgi olmali',
      'Karin kaslarini siki tutun',
      'Basinizi notr pozisyonda tutun, yukari veya asagi bakmayin',
      'Her tekrarda 3-5 saniye tutun',
      'Zor geliyorsa once sadece kol, sonra sadece bacak uzatin',
    ],
    defaultSets: 3,
    defaultReps: '10-12',
    alternatives: ['dead_bug', 'plank'],
  },

  cobra_press: {
    id: 'cobra_press',
    name: 'Cobra Press Up',
    muscles: ['back', 'core', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonunda yaygin olarak kullanilan bir McKenzie egzersizidir. Disk materyalinin one dogru yer degistirmesine yardimci olabilir. Ancak agrI artarsa hemen durulmalidir. Fizyoterapistinize danisin.',
    description:
      'Yere yuzustu uzanin. Ellerinizi omuz hizasinda yere koyun. Bacaklariniz duz ve rahat olsun, kalcaniz yerde kalmali. Nefes vererek yavasca ust govdenizi yerden kaldirin, kollarinizi duzlestirerek yukari dogru itin. Kalcaniz ve bacaklariniz yerde kalmali. Sirtinizda hafif bir gerilme hissetmelisiniz ama agri olmamali. Bu pozisyonda 2-3 saniye tutun. Kontrolllu sekilde baslangic pozisyonuna donun. Eger bacaginiza vuran bir agriniz varsa ve bu hareketle artiyorsa hemen durun ve fizyoterapistinize danisin.',
    tips: [
      'Kalcaniz ve bacaklariniz yerde kalmali',
      'Hareketi yavas ve kontrollU yapin',
      'Agri artarsa hemen durun',
      'Tam uzanma gereksiz, rahat oldugunuz yere kadar cikin',
      'Nefes vererek yukari cikin, nefes alarak inin',
      'Bu bir McKenzie egzersizidir, fizyoterapistinize danisin',
    ],
    defaultSets: 3,
    defaultReps: '8-10',
    alternatives: ['cat_cow', 'pelvic_tilt'],
  },

  knee_rotation: {
    id: 'knee_rotation',
    name: 'Dizleri Saga Sola Yatirma',
    muscles: ['core', 'back', 'rehab'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin guvenli bir rotasyon egzersizidir. Omurgaya nazik bir rotasyon kazandirir. Hareket genisligi kucuk tutulmali ve agriyla sinirlandirilmalidir.',
    description:
      'Sirt ustu yere uzanin, dizlerinizi bukun ve ayaklarinizi yere basin. Kollarinizi iki yana T seklinde acin, avuc icleriniz yukari baksin. Dizlerinizi birlesik tutun. Nefes vererek iki dizinizi yavasca saga dogru yatirin, omuzlariniz yerde kalmali. Dizler yere degmek zorunda degil, rahat oldugunuz kadar gidin. Bu pozisyonda 5-10 saniye tutun ve derin nefes alin. Nefes alarak orta noktaya donun ve ayni hareketi sola tekrarlayin. Bu hareket bel bolgesine nazik bir rotasyon kazandirir ve gerginligi azaltir.',
    tips: [
      'Omuzlar yerde kalmali, yerden kalkmamali',
      'Hareket genisligini agriniza gore ayarlayin',
      'Yavas ve kontrollU hareket edin',
      'Her tarafa 5-10 saniye tutun',
      'Nefes ile hareketi eslesturin',
      'Bu hareketi gunde birden fazla kez yapabilirsiniz',
    ],
    defaultSets: 3,
    defaultReps: '8-10',
    alternatives: ['cat_cow', 'pelvic_tilt'],
  },

  single_knee_to_chest: {
    id: 'single_knee_to_chest',
    name: 'Tek Diz Gogse Cekme',
    muscles: ['rehab', 'core'],
    equipment: ['bodyweight', 'none'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin guvenli bir egzersizdir. Cift diz cekmeye gore daha hafiftir ve tek tarafli olarak bel kaslarini gerer. Baslangic seviyesi icin idealdir.',
    description:
      'Sirt ustu yere uzanin, dizlerinizi bukun ve ayaklarinizi yere basin. Bir dizinizi ellerinizle kavrayin ve yavasca gogsunuze dogru cekin. Diger bacaginiz bukuk ve ayak tabani yerde kalmali. Bu pozisyonda 15-20 saniye tutun, bel bolgesinde hafif bir gerilme hissetmelisiniz. Dizinizi birakarak baslangic pozisyonuna donun ve diger tarafla tekrarlayin. Bu hareket tek tarafli olarak bel kaslarini gerer ve cift diz cekmeye gore daha az yogundur. Bel fitigi rehabilitasyonunda baslangic seviyesi icin idealdir.',
    tips: [
      'Hareketi yavas ve kontrollU yapin',
      'Diger bacak yerde sabit kalmali',
      'Her tarafta 15-20 saniye tutun',
      'Agrili olursa cekme mesafesini azaltin',
      'Basi yere koyun, boynu kaldirmayin',
      'Cift diz cekmeden once bu harekete baslayin',
    ],
    defaultSets: 3,
    defaultReps: '15-20sn',
    alternatives: ['knee_to_chest', 'pelvic_tilt'],
  },

  hamstring_stretch: {
    id: 'hamstring_stretch',
    name: 'Hamstring Germe',
    muscles: ['legs', 'rehab'],
    equipment: ['bodyweight', 'none', 'band'],
    discSafety: 'safe',
    discNotes: 'Bel fitigi rehabilitasyonu icin guvenli ve onemli bir egzersizdir. Siki hamstring kaslari bel uzerinde ekstra basinc olusturur. Sirt ustu yatarak yapmak one egilme yerine cok daha guvenlidir.',
    description:
      'Sirt ustu yere uzanin, dizlerinizi bukun ve ayaklarinizi yere basin. Bir bacaginizi yukari kaldirin, diziniz hafifce kirik olabilir. Ellerinizle baldirin arkasindan veya bir havlu/bant ile ayak tabanindan tutarak bacagi yavasca kendinize dogru cekin. Bacaginizin arkasinda hafif bir gerilme hissetmelisiniz ama agri olmamali. Bu pozisyonda 20-30 saniye tutun ve derin nefes alin. Bacagi birakarak baslangica donun ve diger tarafla tekrarlayin. One egilmek yerine sirt ustu yatarak yapmak bel fitigi olanllar icin cok daha guvenlidir.',
    tips: [
      'Sirt ustu yatarak yapin, one egilmek beli zorlar',
      'Gerilme hissetmelisiniz ama agri olmamali',
      'Her tarafta 20-30 saniye tutun',
      'Diziniz hafifce kirik olabilir, tam duz olmak zorunda degil',
      'Havlu veya egzersiz bandi kullanarak daha rahat yapabilirsiniz',
      'Siki hamstringler bel agrisini arttirir, bu germeyi ihmal etmeyin',
    ],
    defaultSets: 3,
    defaultReps: '20-30sn',
    alternatives: ['glute_bridge', 'knee_to_chest'],
  },
}
