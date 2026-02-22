import { ProgressRing } from '@/components/common/ProgressRing.tsx'

interface Props {
  percentage: number
  dayNumber: number
  phaseLabel: string
}

export function ProgressRingSummary({ percentage, dayNumber, phaseLabel }: Props) {
  return (
    <div className="flex flex-col items-center">
      <ProgressRing percentage={percentage} size={140} strokeWidth={10}>
        <div className="text-center">
          <span className="text-3xl font-bold text-slate-100">%{Math.round(percentage)}</span>
          <p className="text-[10px] text-slate-500 mt-0.5">tamamlandi</p>
        </div>
      </ProgressRing>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-xs text-slate-400">Gun {dayNumber}/90</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">{phaseLabel}</span>
      </div>
    </div>
  )
}
