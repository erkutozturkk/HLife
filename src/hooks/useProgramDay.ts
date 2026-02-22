import { useMemo } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db/database.ts'
import { getProgramDay } from '@/data/program.ts'
import { todayStr } from '@/utils/dates.ts'
import type { ProgramDay } from '@/types/program.ts'

export function useProgramDay(): ProgramDay | null {
  const startDateSetting = useLiveQuery(
    () => db.settings.get('programStartDate')
  )

  return useMemo(() => {
    if (!startDateSetting) return null
    const startDate = startDateSetting.value as string
    return getProgramDay(startDate, todayStr())
  }, [startDateSetting])
}
