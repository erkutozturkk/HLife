import type { ReactNode } from 'react'

interface Props {
  title?: string
  children: ReactNode
}

export function PageContainer({ title, children }: Props) {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-xl font-bold text-slate-100">{title}</h2>
      )}
      {children}
    </div>
  )
}
