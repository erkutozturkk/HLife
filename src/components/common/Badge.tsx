interface Props {
  label: string
  variant?: 'default' | 'safe' | 'caution' | 'avoid' | 'accent'
}

const variantStyles = {
  default: 'bg-slate-700 text-slate-300',
  safe: 'bg-safe/20 text-safe',
  caution: 'bg-caution/20 text-caution',
  avoid: 'bg-avoid/20 text-avoid',
  accent: 'bg-accent/20 text-accent',
}

export function Badge({ label, variant = 'default' }: Props) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${variantStyles[variant]}`}>
      {label}
    </span>
  )
}
