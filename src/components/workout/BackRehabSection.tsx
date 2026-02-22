import { EXERCISES } from '@/data/exercises.ts'
import { ChecklistItem } from '@/components/common/ChecklistItem.tsx'
import { Card } from '@/components/common/Card.tsx'

interface Props {
  exerciseIds: string[]
  completedIds: Set<string>
  onToggle: (exerciseId: string) => void
}

export function BackRehabSection({ exerciseIds, completedIds, onToggle }: Props) {
  if (exerciseIds.length === 0) return null

  return (
    <Card>
      <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
        <span>🧘</span>
        Bel Egzersizleri
      </h3>
      <p className="text-xs text-slate-500 mb-3">
        Agri hissederseniz hareketi birakin. Zorlamayin.
      </p>
      <div className="space-y-2">
        {exerciseIds.map((id) => {
          const exercise = EXERCISES[id]
          if (!exercise) return null
          return (
            <ChecklistItem
              key={id}
              label={exercise.name}
              detail={exercise.description.split('\n')[0]}
              checked={completedIds.has(id)}
              onChange={() => onToggle(id)}
            />
          )
        })}
      </div>
    </Card>
  )
}
