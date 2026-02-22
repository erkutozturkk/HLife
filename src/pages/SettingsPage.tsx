import { useCallback } from 'react'
import { PageContainer } from '@/components/layout/PageContainer.tsx'
import { Card } from '@/components/common/Card.tsx'
import { db } from '@/db/database.ts'
import { useLiveQuery } from 'dexie-react-hooks'
import { useAppStore } from '@/stores/appStore.ts'

export default function SettingsPage() {
  const settings = useLiveQuery(() => db.settings.toArray())
  const addToast = useAppStore((s) => s.addToast)

  const getValue = (key: string): string => {
    const s = settings?.find((s) => s.key === key)
    return s ? String(s.value) : ''
  }

  const updateSetting = useCallback(
    async (key: string, value: string | number) => {
      await db.settings.put({ key, value })
    },
    []
  )

  const handleExport = useCallback(async () => {
    try {
      const data = {
        settings: await db.settings.toArray(),
        workoutLogs: await db.workoutLogs.toArray(),
        nutritionLogs: await db.nutritionLogs.toArray(),
        careLogs: await db.careLogs.toArray(),
        dailyProgress: await db.dailyProgress.toArray(),
        bodyStats: await db.bodyStats.toArray(),
        exportedAt: new Date().toISOString(),
      }

      const json = JSON.stringify(data, null, 2)
      const blob = new Blob([json], { type: 'application/json' })
      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = `hlife-backup-${new Date().toISOString().slice(0, 10)}.json`
      a.click()

      URL.revokeObjectURL(url)
      addToast('Veri disa aktarildi!', 'success')
    } catch {
      addToast('Disa aktarma basarisiz.', 'error')
    }
  }, [addToast])

  const handleImport = useCallback(async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      try {
        const text = await file.text()
        const data = JSON.parse(text)

        if (data.settings) {
          await db.settings.clear()
          await db.settings.bulkPut(data.settings)
        }
        if (data.workoutLogs) {
          await db.workoutLogs.clear()
          await db.workoutLogs.bulkAdd(data.workoutLogs)
        }
        if (data.nutritionLogs) {
          await db.nutritionLogs.clear()
          await db.nutritionLogs.bulkAdd(data.nutritionLogs)
        }
        if (data.careLogs) {
          await db.careLogs.clear()
          await db.careLogs.bulkAdd(data.careLogs)
        }
        if (data.dailyProgress) {
          await db.dailyProgress.clear()
          await db.dailyProgress.bulkAdd(data.dailyProgress)
        }
        if (data.bodyStats) {
          await db.bodyStats.clear()
          await db.bodyStats.bulkAdd(data.bodyStats)
        }

        addToast('Veri ice aktarildi!', 'success')
      } catch {
        addToast('Ice aktarma basarisiz.', 'error')
      }
    }
    input.click()
  }, [addToast])

  if (!settings) {
    return (
      <PageContainer title="Ayarlar">
        <p className="text-slate-400">Yukleniyor...</p>
      </PageContainer>
    )
  }

  return (
    <PageContainer title="Ayarlar">
      <div className="space-y-4">
        <Card>
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Program</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Baslangic Tarihi</label>
              <input
                type="date"
                value={getValue('programStartDate')}
                onChange={(e) => updateSetting('programStartDate', e.target.value)}
                className="w-full bg-slate-700 text-slate-100 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Protein Hedefi (g)</label>
              <input
                type="number"
                value={getValue('proteinTarget')}
                onChange={(e) => updateSetting('proteinTarget', parseInt(e.target.value) || 160)}
                className="w-full bg-slate-700 text-slate-100 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Su Hedefi (bardak)</label>
              <input
                type="number"
                value={getValue('waterTarget')}
                onChange={(e) => updateSetting('waterTarget', parseInt(e.target.value) || 10)}
                className="w-full bg-slate-700 text-slate-100 rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Dinlenme Suresi (sn)</label>
              <input
                type="number"
                value={getValue('restTimerSeconds')}
                onChange={(e) => updateSetting('restTimerSeconds', parseInt(e.target.value) || 90)}
                className="w-full bg-slate-700 text-slate-100 rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Veri Yonetimi</h3>
          <div className="space-y-2">
            <button
              onClick={handleExport}
              className="w-full py-3 rounded-xl bg-accent/20 text-accent text-sm font-medium active:bg-accent/30"
            >
              Veriyi Disa Aktar (JSON)
            </button>
            <button
              onClick={handleImport}
              className="w-full py-3 rounded-xl bg-slate-700 text-slate-300 text-sm font-medium active:bg-slate-600"
            >
              Veri Ice Aktar
            </button>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-slate-300 mb-3">iOS Kurulum</h3>
          <div className="text-xs text-slate-400 space-y-2">
            <p>Bu uygulamayi iPhone'unuza kurmak icin:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Safari ile bu sayfayi acin</li>
              <li>Alt taraftaki paylasim butonuna basin</li>
              <li>"Ana Ekrana Ekle" secenegini secin</li>
              <li>"Ekle" butonuna basin</li>
            </ol>
            <p className="text-slate-500">Uygulama ana ekraninizda gorunecek ve offline calisacak.</p>
          </div>
        </Card>

        <div className="text-center text-xs text-slate-600 py-4">
          HLife v1.0 - Kisisel Saglik & Fitness
        </div>
      </div>
    </PageContainer>
  )
}
