interface Props {
  value: number | null
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  unit?: string
  placeholder?: string
}

export function NumberStepper({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  unit,
  placeholder = '0',
}: Props) {
  const displayValue = value ?? 0

  const decrement = () => {
    const next = Math.max(min, displayValue - step)
    onChange(next)
  }

  const increment = () => {
    const next = Math.min(max, displayValue + step)
    onChange(next)
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={decrement}
        className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 active:bg-slate-600 text-sm font-bold"
      >
        -
      </button>
      <div className="w-10 text-center">
        <span className="text-sm font-mono text-slate-100">
          {value !== null ? displayValue : placeholder}
        </span>
        {unit && <span className="text-[9px] text-slate-500 ml-0.5">{unit}</span>}
      </div>
      <button
        onClick={increment}
        className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 active:bg-slate-600 text-sm font-bold"
      >
        +
      </button>
    </div>
  )
}
