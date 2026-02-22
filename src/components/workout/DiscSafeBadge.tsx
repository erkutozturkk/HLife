import type { DiscSafety } from '@/types/exercise.ts'
import { Badge } from '@/components/common/Badge.tsx'

const config: Record<DiscSafety, { label: string; variant: 'safe' | 'caution' | 'avoid' }> = {
  safe: { label: 'Guvenli', variant: 'safe' },
  caution: { label: 'Dikkatli', variant: 'caution' },
  avoid: { label: 'Kacin', variant: 'avoid' },
}

interface Props {
  safety: DiscSafety
}

export function DiscSafeBadge({ safety }: Props) {
  const { label, variant } = config[safety]
  return <Badge label={label} variant={variant} />
}
