interface Props {
  label: string
  detail?: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function ChecklistItem({ label, detail, checked, onChange }: Props) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${
        checked ? 'bg-success/10' : 'bg-slate-800'
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
          checked
            ? 'bg-success border-success'
            : 'border-slate-600'
        }`}
      >
        {checked && (
          <svg className="w-3.5 h-3.5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <span className={`text-sm font-medium ${checked ? 'text-success line-through' : 'text-slate-200'}`}>
          {label}
        </span>
        {detail && (
          <p className="text-xs text-slate-500 mt-0.5">{detail}</p>
        )}
      </div>
    </button>
  )
}
