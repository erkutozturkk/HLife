import { useOnlineStatus } from '@/hooks/useOnlineStatus.ts'

interface Props {
  videoUrl?: string
}

export function ExerciseVideo({ videoUrl }: Props) {
  const isOnline = useOnlineStatus()

  if (!videoUrl) return null

  if (!isOnline) {
    return (
      <div className="rounded-lg bg-slate-700/50 p-3 text-sm text-slate-400">
        <p>Video icin internet baglantisi gerekli.</p>
        <p className="text-xs mt-1">Yukaridaki yazili aciklamayi kullanabilirsiniz.</p>
      </div>
    )
  }

  const embedUrl = convertToEmbedUrl(videoUrl)

  return (
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        className="w-full h-full"
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
        allowFullScreen
      />
    </div>
  )
}

function convertToEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/
  )
  if (match) {
    return `https://www.youtube.com/embed/${match[1]}`
  }
  return url
}
