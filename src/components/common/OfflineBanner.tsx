import { useOnlineStatus } from '@/hooks/useOnlineStatus.ts'

export function OfflineBanner() {
  const isOnline = useOnlineStatus()

  if (isOnline) return null

  return (
    <div className="bg-warning/20 text-warning text-xs text-center py-1.5 px-4">
      Cevrimdisi - Veriler lokal kaydediliyor
    </div>
  )
}
