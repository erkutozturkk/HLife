import { useEffect } from 'react'
import { useAppStore } from '@/stores/appStore.ts'

export function RestTimer() {
  const active = useAppStore((s) => s.restTimerActive)
  const remaining = useAppStore((s) => s.restTimerRemaining)
  const total = useAppStore((s) => s.restTimerSeconds)
  const tick = useAppStore((s) => s.tickRestTimer)
  const stop = useAppStore((s) => s.stopRestTimer)

  useEffect(() => {
    if (!active) return
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [active, tick])

  useEffect(() => {
    if (active && remaining === 0) {
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200])
      }
    }
  }, [active, remaining])

  if (!active) return null

  const percentage = ((total - remaining) / total) * 100
  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60

  return (
    <div className="fixed inset-0 z-[90] bg-bg-primary/95 flex flex-col items-center justify-center">
      <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider">Dinlenme</p>

      <div className="relative w-48 h-48">
        <svg className="w-48 h-48 -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-800" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="6"
            strokeDasharray={90 * 2 * Math.PI}
            strokeDashoffset={90 * 2 * Math.PI * (1 - percentage / 100)}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-1000 linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold font-mono text-slate-100">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      <button
        onClick={stop}
        className="mt-8 px-8 py-3 rounded-full bg-slate-700 text-slate-300 text-sm font-medium active:bg-slate-600"
      >
        Atla
      </button>
    </div>
  )
}
