import type { ExerciseSet } from '@/types/exercise.ts'
import { SetRow } from './SetRow.tsx'

interface Props {
  sets: ExerciseSet[]
  onUpdateSet: (index: number, set: ExerciseSet) => void
  onAddSet: () => void
  onSetComplete: () => void
}

export function SetLogger({ sets, onUpdateSet, onAddSet, onSetComplete }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-3">
        <div className="flex gap-6 text-[10px] text-slate-600 uppercase">
          <span className="w-6">Set</span>
          <span>Tekrar</span>
          <span>Agirlik</span>
        </div>
      </div>

      {sets.map((set, i) => (
        <SetRow
          key={set.setNumber}
          set={set}
          onUpdate={(updated) => {
            onUpdateSet(i, updated)
            if (updated.completed && !set.completed) {
              onSetComplete()
            }
          }}
        />
      ))}

      <button
        onClick={onAddSet}
        className="w-full py-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
      >
        + Set Ekle
      </button>
    </div>
  )
}
