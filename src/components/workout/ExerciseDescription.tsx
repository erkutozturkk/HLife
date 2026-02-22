import type { Exercise } from '@/types/exercise.ts'

interface Props {
  exercise: Exercise
}

export function ExerciseDescription({ exercise }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">
        {exercise.description}
      </p>

      {exercise.tips.length > 0 && (
        <div className="space-y-1.5">
          <h4 className="text-xs font-semibold text-slate-400 uppercase">Ipuclari</h4>
          <ul className="space-y-1">
            {exercise.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-xs text-slate-400">
                <span className="text-accent flex-shrink-0">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {exercise.discNotes && (
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <span className="text-warning flex-shrink-0">⚠️</span>
            <p className="text-xs text-warning/90">{exercise.discNotes}</p>
          </div>
        </div>
      )}
    </div>
  )
}
