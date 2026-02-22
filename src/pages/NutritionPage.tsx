import { useEffect, useCallback } from 'react'
import { PageContainer } from '@/components/layout/PageContainer.tsx'
import { Card } from '@/components/common/Card.tsx'
import { ChecklistItem } from '@/components/common/ChecklistItem.tsx'
import { ProgressBar } from '@/components/common/ProgressBar.tsx'
import { useProgramDay } from '@/hooks/useProgramDay.ts'
import { getGymDayMeals, getRestDayMeals } from '@/data/meals.ts'
import { getSupplements } from '@/data/supplements.ts'
import { db } from '@/db/database.ts'
import { useLiveQuery } from 'dexie-react-hooks'
import { todayStr } from '@/utils/dates.ts'
import { PROTEIN_TARGET, WATER_TARGET } from '@/utils/constants.ts'

export default function NutritionPage() {
  const programDay = useProgramDay()
  const today = todayStr()

  const nutritionLog = useLiveQuery(
    () => db.nutritionLogs.where('date').equals(today).first(),
    [today]
  )

  // Initialize nutrition log
  useEffect(() => {
    if (!programDay || nutritionLog !== undefined) return

    const meals = programDay.isGymDay ? getGymDayMeals() : getRestDayMeals()
    const supplements = getSupplements(programDay.isGymDay)

    db.nutritionLogs.add({
      date: today,
      programDay: programDay.dayNumber,
      meals,
      supplements,
      waterGlasses: 0,
      totalProteinG: 0,
      updatedAt: Date.now(),
    })
  }, [programDay, nutritionLog, today])

  const updateLog = useCallback(
    async (updates: Partial<typeof nutritionLog>) => {
      if (!nutritionLog?.id) return
      await db.nutritionLogs.update(nutritionLog.id, {
        ...updates,
        updatedAt: Date.now(),
      })
    },
    [nutritionLog]
  )

  const toggleMeal = useCallback(
    (mealId: string) => {
      if (!nutritionLog) return
      const meals = nutritionLog.meals.map((m) =>
        m.id === mealId
          ? { ...m, completed: !m.completed, items: m.items.map((i) => ({ ...i, completed: !m.completed })) }
          : m
      )
      const totalProteinG = meals
        .filter((m) => m.completed)
        .reduce((sum, m) => sum + m.items.reduce((s, i) => s + i.proteinG, 0), 0)
      updateLog({ meals, totalProteinG })
    },
    [nutritionLog, updateLog]
  )

  const toggleSupplement = useCallback(
    (suppId: string) => {
      if (!nutritionLog) return
      const supplements = nutritionLog.supplements.map((s) =>
        s.id === suppId ? { ...s, taken: !s.taken } : s
      )
      updateLog({ supplements })
    },
    [nutritionLog, updateLog]
  )

  const addWater = useCallback(() => {
    if (!nutritionLog) return
    updateLog({ waterGlasses: nutritionLog.waterGlasses + 1 })
  }, [nutritionLog, updateLog])

  const removeWater = useCallback(() => {
    if (!nutritionLog) return
    updateLog({ waterGlasses: Math.max(0, nutritionLog.waterGlasses - 1) })
  }, [nutritionLog, updateLog])

  if (!nutritionLog) {
    return (
      <PageContainer title="Beslenme">
        <p className="text-slate-400">Yukleniyor...</p>
      </PageContainer>
    )
  }

  const proteinProgress = (nutritionLog.totalProteinG / PROTEIN_TARGET) * 100
  const waterProgress = (nutritionLog.waterGlasses / WATER_TARGET) * 100

  return (
    <PageContainer>
      <div className="space-y-4">
        {/* Protein Tracker */}
        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-slate-300">Protein</h3>
            <span className="text-xs text-slate-400">
              {nutritionLog.totalProteinG}g / {PROTEIN_TARGET}g
            </span>
          </div>
          <ProgressBar
            percentage={proteinProgress}
            color="bg-orange-400"
            showPercentage
          />
        </Card>

        {/* Water Tracker */}
        <Card>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-slate-300">Su</h3>
            <span className="text-xs text-slate-400">
              {nutritionLog.waterGlasses} / {WATER_TARGET} bardak
            </span>
          </div>
          <ProgressBar percentage={waterProgress} color="bg-blue-400" />
          <div className="flex items-center justify-center gap-4 mt-3">
            <button
              onClick={removeWater}
              className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xl text-slate-300 active:bg-slate-600"
            >
              -
            </button>
            <div className="flex gap-1 flex-wrap justify-center">
              {Array.from({ length: WATER_TARGET }, (_, i) => (
                <div
                  key={i}
                  className={`w-5 h-7 rounded-sm transition-colors ${
                    i < nutritionLog.waterGlasses ? 'bg-blue-400' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={addWater}
              className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl text-blue-400 active:bg-blue-500/30"
            >
              +
            </button>
          </div>
        </Card>

        {/* Meals */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Ogunler</h3>
          <div className="space-y-2">
            {nutritionLog.meals.map((meal) => (
              <ChecklistItem
                key={meal.id}
                label={`${meal.name} (${meal.time})`}
                detail={meal.items.map((i) => `${i.name} - ${i.proteinG}g`).join(', ')}
                checked={meal.completed}
                onChange={() => toggleMeal(meal.id)}
              />
            ))}
          </div>
        </Card>

        {/* Supplements */}
        <Card>
          <h3 className="text-sm font-semibold text-slate-300 mb-3">Takviyeler</h3>
          <div className="space-y-2">
            {nutritionLog.supplements.map((supp) => (
              <ChecklistItem
                key={supp.id}
                label={supp.name}
                detail={`${supp.dose} - ${supp.timing}`}
                checked={supp.taken}
                onChange={() => toggleSupplement(supp.id)}
              />
            ))}
          </div>
        </Card>
      </div>
    </PageContainer>
  )
}
