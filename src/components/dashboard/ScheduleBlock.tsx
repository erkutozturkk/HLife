import type { ScheduleBlock as ScheduleBlockType } from '@/types/schedule.ts'
import { getCurrentHour } from '@/utils/dates.ts'

const typeColors: Record<ScheduleBlockType['type'], string> = {
  wake: 'border-yellow-500',
  meal: 'border-orange-400',
  supplement: 'border-purple-400',
  workout: 'border-accent',
  work: 'border-slate-500',
  care: 'border-pink-400',
  rehab: 'border-green-400',
  sleep: 'border-indigo-400',
  other: 'border-slate-600',
}

const typeIcons: Record<ScheduleBlockType['type'], string> = {
  wake: '🌅',
  meal: '🍽️',
  supplement: '💊',
  workout: '💪',
  work: '💼',
  care: '✨',
  rehab: '🧘',
  sleep: '😴',
  other: '📌',
}

interface Props {
  block: ScheduleBlockType
}

export function ScheduleBlock({ block }: Props) {
  const currentHour = getCurrentHour()
  const blockHour = parseInt(block.time.split(':')[0])
  const isPast = blockHour < currentHour
  const isCurrent = blockHour === currentHour

  return (
    <div
      className={`flex gap-3 items-start ${isPast ? 'opacity-50' : ''} ${isCurrent ? 'scale-[1.02]' : ''}`}
    >
      <div className="flex flex-col items-center">
        <span className={`text-xs font-mono w-12 text-right ${isCurrent ? 'text-accent font-bold' : 'text-slate-500'}`}>
          {block.time}
        </span>
      </div>
      <div className={`flex-1 border-l-2 pl-3 pb-4 ${isCurrent ? 'border-accent' : typeColors[block.type]}`}>
        <div className="flex items-center gap-2">
          <span className="text-sm">{typeIcons[block.type]}</span>
          <span className={`text-sm font-medium ${isCurrent ? 'text-accent' : 'text-slate-200'}`}>
            {block.label}
          </span>
        </div>
        {block.detail && (
          <p className="text-xs text-slate-500 mt-0.5">{block.detail}</p>
        )}
        {block.duration && (
          <span className="text-[10px] text-slate-600">{block.duration}</span>
        )}
      </div>
    </div>
  )
}
