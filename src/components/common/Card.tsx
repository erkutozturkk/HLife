import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Card({ children, className = '', onClick }: Props) {
  const Component = onClick ? 'button' : 'div'
  return (
    <Component
      onClick={onClick}
      className={`bg-bg-card rounded-2xl p-4 ${onClick ? 'text-left w-full active:scale-[0.98] transition-transform' : ''} ${className}`}
    >
      {children}
    </Component>
  )
}
