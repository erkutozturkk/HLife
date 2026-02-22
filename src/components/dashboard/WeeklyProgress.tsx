import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db/database.ts'
import { addDays, todayStr } from '@/utils/dates.ts'
import { Card } from '@/components/common/Card.tsx'

export function WeeklyProgress() {
  const today = todayStr()
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6))

  const weekProgress = useLiveQuery(async () => {
    const results: { date: string; percentage: number }[] = []
    for (const date of weekDates) {
      const progress = await db.dailyProgress.where('date').equals(date).first()
      results.push({ date, percentage: progress?.overallPercentage ?? 0 })
    }
    return results
  }, [today])

  if (!weekProgress) return null

  const dayLabels = ['Pzt', 'Sal', 'Car', 'Per', 'Cum', 'Cmt', 'Paz']

  return (
    <Card>
      <h3 className="text-sm font-semibold text-slate-300 mb-3">Haftalik Ilerleme</h3>
      <div className="flex items-end gap-1 h-20">
        {weekProgress.map((day) => {
          const isToday = day.date === today
          const barHeight = Math.max(4, (day.percentage / 100) * 64)
          return (
            <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end justify-center h-16">
                <div
                  className={`w-full max-w-6 rounded-t-sm transition-all ${
                    isToday ? 'bg-accent' : day.percentage > 0 ? 'bg-slate-600' : 'bg-slate-800'
                  }`}
                  style={{ height: barHeight }}
                />
              </div>
              <span className={`text-[9px] ${isToday ? 'text-accent font-bold' : 'text-slate-600'}`}>
                {dayLabels[(new Date(day.date).getDay() + 6) % 7]}
              </span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
