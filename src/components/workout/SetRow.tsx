import type { ExerciseSet } from '@/types/exercise.ts'
import { NumberStepper } from './NumberStepper.tsx'

interface Props {
  set: ExerciseSet
  onUpdate: (updated: ExerciseSet) => void
}

export function SetRow({ set, onUpdate }: Props) {
  return (
    <div
      className={`flex items-center gap-2 py-2 px-3 rounded-xl transition-colors ${
        set.completed ? 'bg-success/10' : 'bg-slate-800'
      }`}
    >
      <span className="text-xs text-slate-500 w-6 flex-shrink-0">
        S{set.setNumber}
      </span>

      <div className="flex-1 flex items-center gap-3">
        <NumberStepper
          value={set.actualReps}
          onChange={(v) => onUpdate({ ...set, actualReps: v })}
          min={0}
          max={50}
          placeholder={String(set.targetReps)}
          unit="rep"
        />
        <NumberStepper
          value={set.weightKg}
          onChange={(v) => onUpdate({ ...set, weightKg: v })}
          min={0}
          max={300}
          step={2.5}
          placeholder="0"
          unit="kg"
        />
      </div>

      <button
        onClick={() =>
          onUpdate({
            ...set,
            completed: !set.completed,
            actualReps: set.actualReps ?? set.targetReps,
          })
        }
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
          set.completed
            ? 'bg-success border-success'
            : 'border-slate-600 active:border-slate-400'
        }`}
      >
        {set.completed && (
          <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        )}
      </button>
    </div>
  )
}
