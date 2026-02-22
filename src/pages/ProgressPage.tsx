import { useState, useRef, useCallback, useEffect } from 'react'
import { PageContainer } from '@/components/layout/PageContainer.tsx'
import { Card } from '@/components/common/Card.tsx'
import { ProgressRing } from '@/components/common/ProgressRing.tsx'
import { useProgramDay } from '@/hooks/useProgramDay.ts'
import { db } from '@/db/database.ts'
import { useLiveQuery } from 'dexie-react-hooks'
import { todayStr, formatDateTR } from '@/utils/dates.ts'
import { compressImage } from '@/utils/images.ts'
import { useAppStore } from '@/stores/appStore.ts'
import type { PhotoCategory } from '@/types/progress.ts'

const categories: { value: PhotoCategory; label: string }[] = [
  { value: 'front', label: 'On' },
  { value: 'side_left', label: 'Sol' },
  { value: 'side_right', label: 'Sag' },
  { value: 'back', label: 'Arka' },
]

export default function ProgressPage() {
  const programDay = useProgramDay()
  const today = todayStr()
  const addToast = useAppStore((s) => s.addToast)
  const [tab, setTab] = useState<'photos' | 'calendar'>('photos')
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null)
  const [saving, setSaving] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const photos = useLiveQuery(
    () => db.progressPhotos.orderBy('date').reverse().toArray()
  )

  const allProgress = useLiveQuery(
    () => db.dailyProgress.orderBy('date').toArray()
  )

  const handleCategorySelect = (cat: PhotoCategory) => {
    setSelectedCategory(cat)
    fileRef.current?.click()
  }

  const handleFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file || !selectedCategory || !programDay) return

      setSaving(true)
      try {
        const { full, thumbnail } = await compressImage(file)
        const bitmap = await createImageBitmap(file)

        await db.progressPhotos.add({
          date: today,
          programDay: programDay.dayNumber,
          category: selectedCategory,
          blob: full,
          thumbnailBlob: thumbnail,
          width: bitmap.width,
          height: bitmap.height,
          createdAt: Date.now(),
        })

        bitmap.close()
        addToast('Foto kaydedildi!', 'success')
      } catch {
        addToast('Foto kaydedilemedi.', 'error')
      } finally {
        setSaving(false)
        setSelectedCategory(null)
        if (fileRef.current) fileRef.current.value = ''
      }
    },
    [selectedCategory, programDay, today, addToast]
  )

  // Photo comparison state
  const [compareCategory, setCompareCategory] = useState<PhotoCategory>('front')
  const [sliderPercent, setSliderPercent] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const comparePhotos = useLiveQuery(
    () =>
      db.progressPhotos
        .where('category')
        .equals(compareCategory)
        .sortBy('date'),
    [compareCategory]
  )

  const firstPhoto = comparePhotos?.[0]
  const lastPhoto = comparePhotos && comparePhotos.length > 1 ? comparePhotos[comparePhotos.length - 1] : null

  const [firstUrl, setFirstUrl] = useState<string | null>(null)
  const [lastUrl, setLastUrl] = useState<string | null>(null)

  useEffect(() => {
    if (firstPhoto?.blob) {
      const url = URL.createObjectURL(firstPhoto.blob)
      setFirstUrl(url)
      return () => URL.revokeObjectURL(url)
    }
    setFirstUrl(null)
  }, [firstPhoto])

  useEffect(() => {
    if (lastPhoto?.blob) {
      const url = URL.createObjectURL(lastPhoto.blob)
      setLastUrl(url)
      return () => URL.revokeObjectURL(url)
    }
    setLastUrl(null)
  }, [lastPhoto])

  const handleSliderDrag = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setSliderPercent(Math.max(2, Math.min(98, pct)))
  }, [])

  // Thumbnail display
  const [thumbUrls, setThumbUrls] = useState<Record<number, string>>({})
  useEffect(() => {
    if (!photos) return
    const urls: Record<number, string> = {}
    for (const p of photos) {
      if (p.id !== undefined) {
        urls[p.id] = URL.createObjectURL(p.thumbnailBlob)
      }
    }
    setThumbUrls(urls)
    return () => {
      Object.values(urls).forEach(URL.revokeObjectURL)
    }
  }, [photos])

  return (
    <PageContainer>
      <div className="space-y-4">
        {/* Day progress */}
        {programDay && (
          <div className="flex items-center justify-center">
            <ProgressRing percentage={(programDay.dayNumber / 90) * 100} size={80} strokeWidth={6}>
              <div className="text-center">
                <span className="text-lg font-bold">{programDay.dayNumber}</span>
                <p className="text-[8px] text-slate-500">/90 gun</p>
              </div>
            </ProgressRing>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setTab('photos')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === 'photos' ? 'bg-accent text-slate-900' : 'bg-slate-700 text-slate-300'
            }`}
          >
            Fotograflar
          </button>
          <button
            onClick={() => setTab('calendar')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === 'calendar' ? 'bg-accent text-slate-900' : 'bg-slate-700 text-slate-300'
            }`}
          >
            Takvim
          </button>
        </div>

        {tab === 'photos' && (
          <>
            {/* Upload buttons */}
            <Card>
              <h3 className="text-sm font-semibold text-slate-300 mb-3">Foto Ekle</h3>
              <div className="grid grid-cols-4 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleCategorySelect(cat.value)}
                    disabled={saving}
                    className="flex flex-col items-center gap-1 py-3 rounded-xl bg-slate-700 active:bg-slate-600 text-slate-300 disabled:opacity-50"
                  >
                    <span className="text-lg">📸</span>
                    <span className="text-[10px]">{cat.label}</span>
                  </button>
                ))}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileSelect}
              />
            </Card>

            {/* Comparison */}
            {comparePhotos && comparePhotos.length >= 2 && (
              <Card>
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Karsilastirma</h3>
                <div className="flex gap-2 mb-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCompareCategory(cat.value)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium ${
                        compareCategory === cat.value ? 'bg-accent text-slate-900' : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {firstUrl && lastUrl && (
                  <div
                    ref={containerRef}
                    className="relative w-full aspect-[3/4] rounded-xl overflow-hidden touch-none select-none bg-slate-800"
                    onTouchMove={(e) => {
                      e.preventDefault()
                      handleSliderDrag(e.touches[0].clientX)
                    }}
                    onMouseMove={(e) => {
                      if (e.buttons !== 1) return
                      handleSliderDrag(e.clientX)
                    }}
                    onMouseDown={(e) => handleSliderDrag(e.clientX)}
                  >
                    <img src={firstUrl} alt="Once" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPercent}%` }}>
                      <img
                        src={lastUrl}
                        alt="Sonra"
                        className="absolute top-0 left-0 h-full object-cover"
                        style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }}
                        draggable={false}
                      />
                    </div>
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
                      style={{ left: `${sliderPercent}%`, transform: 'translateX(-50%)' }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <span className="text-slate-700 text-xs font-bold">&lt;&gt;</span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 z-10">
                      <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">ONCE</span>
                    </div>
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">SONRA</span>
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Photo Grid */}
            {photos && photos.length > 0 && (
              <Card>
                <h3 className="text-sm font-semibold text-slate-300 mb-3">
                  Tum Fotograflar ({photos.length})
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {photos.map((photo) => (
                    <div key={photo.id} className="aspect-square rounded-lg overflow-hidden bg-slate-800">
                      {photo.id !== undefined && thumbUrls[photo.id] && (
                        <img
                          src={thumbUrls[photo.id]}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="relative">
                        <span className="absolute bottom-1 left-1 bg-black/60 text-[8px] text-white px-1 rounded">
                          {formatDateTR(photo.date).split(' ').slice(0, 2).join(' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </>
        )}

        {tab === 'calendar' && (
          <Card>
            <h3 className="text-sm font-semibold text-slate-300 mb-3">90 Gun Takvim</h3>
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 90 }, (_, i) => {
                const dayProgress = allProgress?.find((p) => p.programDay === i + 1)
                const pct = dayProgress?.overallPercentage ?? 0
                const isCurrent = programDay?.dayNumber === i + 1

                let bgColor = 'bg-slate-800'
                if (pct >= 80) bgColor = 'bg-success'
                else if (pct >= 50) bgColor = 'bg-success/50'
                else if (pct > 0) bgColor = 'bg-success/20'

                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm flex items-center justify-center text-[7px] ${bgColor} ${
                      isCurrent ? 'ring-1 ring-accent' : ''
                    }`}
                  >
                    {i + 1}
                  </div>
                )
              })}
            </div>
            <div className="flex items-center gap-3 mt-3 text-[10px] text-slate-500">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-sm bg-success" />
                <span>&gt;80%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-sm bg-success/50" />
                <span>50-80%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-sm bg-success/20" />
                <span>&lt;50%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-sm bg-slate-800" />
                <span>Yok</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </PageContainer>
  )
}
