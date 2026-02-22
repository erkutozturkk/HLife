import { Card } from '@/components/common/Card.tsx'

interface Props {
  currentStreak: number
  longestStreak: number
}

export function StreakCounter({ currentStreak, longestStreak }: Props) {
  return (
    <Card className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">🔥</span>
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-warning">{currentStreak}</span>
          <span className="text-sm text-slate-400">gun seri</span>
        </div>
        <p className="text-xs text-slate-600">En uzun: {longestStreak} gun</p>
      </div>
    </Card>
  )
}
