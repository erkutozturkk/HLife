import { useNavigate } from 'react-router'
import type { DayType } from '@/types/program.ts'
import { DAY_LABELS } from '@/data/program-exercises.ts'
import { Card } from '@/components/common/Card.tsx'

interface Props {
  dayType: DayType
  exerciseCount: number
  isGymDay: boolean
}

export function TodayWorkoutPreview({ dayType, exerciseCount, isGymDay }: Props) {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate('/workout')} className="border border-slate-700/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 mb-0.5">{isGymDay ? 'Bugunun Antrenmani' : 'Bugun'}</p>
          <h3 className="text-base font-bold text-slate-100">{DAY_LABELS[dayType]}</h3>
          {isGymDay && (
            <p className="text-xs text-slate-400 mt-1">{exerciseCount} egzersiz + bel egzersizleri</p>
          )}
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isGymDay ? 'bg-accent/20' : 'bg-slate-700'}`}>
          <span className="text-xl">{isGymDay ? '💪' : '🧘'}</span>
        </div>
      </div>
    </Card>
  )
}
