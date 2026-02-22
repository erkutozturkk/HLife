interface Props {
  percentage: number
  color?: string
  height?: number
  label?: string
  showPercentage?: boolean
}

export function ProgressBar({
  percentage,
  color = 'bg-accent',
  height = 8,
  label,
  showPercentage = false,
}: Props) {
  return (
    <div>
      {(label || showPercentage) && (
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          {label && <span>{label}</span>}
          {showPercentage && <span>%{Math.round(percentage)}</span>}
        </div>
      )}
      <div className="w-full bg-slate-700 rounded-full overflow-hidden" style={{ height }}>
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${color}`}
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
    </div>
  )
}
