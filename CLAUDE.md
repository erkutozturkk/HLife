# HLife - Kisisel Saglik & Fitness PWA

## Proje Ozeti
3 aylik (90 gun) kapsamli saglik/fitness programi takip uygulamasi. Tek kullanici (Erkut), Turkce, offline calisan PWA.

## Tech Stack
- React 19 + TypeScript + Vite
- TailwindCSS v4 (dark mode)
- IndexedDB (Dexie.js) - tum veri lokal
- Service Worker (vite-plugin-pwa + Workbox) - offline
- Zustand (UI state) + Dexie useLiveQuery (data state)
- Deploy: Vercel (GitHub: erkutozturkk/HLife)

## Klasor Yapisi
- `src/pages/` - 6 sayfa (Dashboard, Workout, Nutrition, Care, Progress, Settings)
- `src/components/` - layout/, common/, dashboard/, workout/, nutrition/, care/, progress/
- `src/data/` - Egzersiz kutuphanesi, program ureteci, ogun/takviye/bakim sablonlari
- `src/db/` - Dexie veritabani sema + seed + helpers
- `src/hooks/` - useProgramDay, useOnlineStatus vb.
- `src/types/` - TypeScript tip tanimlari
- `src/stores/` - Zustand store (rest timer, toasts)
- `src/i18n/tr.ts` - Turkce metinler
- `src/utils/` - Tarih, resim sikistirma, sabitler

## Onemli Dosyalar
- `src/data/exercises.ts` - ~32 egzersiz, Turkce aciklamalar, bel fitigi guvenlik sistemi
- `src/data/program.ts` - 90 gun program ureteci (3 faz: Adaptasyon/Hipertrofi/Guc)
- `src/db/database.ts` - 7 tablo (settings, workoutLogs, nutritionLogs, careLogs, dailyProgress, progressPhotos, bodyStats)
- `src/pages/WorkoutPage.tsx` - En karmasik sayfa (egzersiz kartlari, set kayit, dinlenme sayaci)

## Kullanici Profili
- Hafta ici 08:30-17:30 mesai
- Spor salonu 07:00 aciliyor, 06:15 kalkis (spor gunleri)
- Bel fitigi var - agir squat/deadlift YASAK
- Hedefler: kas kazanimi, sac dokulmesi engelleme, cilt bakimi, esneklik
- 23:00 uyku (cuma/cumartesi haric)

## Komutlar
- `npm run dev` - Dev server (localhost:5173)
- `npm run build` - Production build
- `git push origin main` - Vercel otomatik deploy eder
