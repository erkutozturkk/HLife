import type { DaySchedule } from '@/types/schedule.ts'
import { ScheduleBlock } from './ScheduleBlock.tsx'
import { Card } from '@/components/common/Card.tsx'

interface Props {
  schedule: DaySchedule
}

export function DayOverview({ schedule }: Props) {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-slate-300 mb-3">Bugunun Programi</h3>
      <div className="space-y-0">
        {schedule.blocks.map((block, i) => (
          <ScheduleBlock key={i} block={block} />
        ))}
      </div>
    </Card>
  )
}
