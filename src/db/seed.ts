import { db } from './database.ts'

export async function seedDatabase() {
  const existing = await db.settings.get('programStartDate')
  if (existing) return

  await db.settings.bulkPut([
    { key: 'programStartDate', value: new Date().toISOString().slice(0, 10) },
    { key: 'proteinTarget', value: 160 },
    { key: 'waterTarget', value: 10 },
    { key: 'restTimerSeconds', value: 90 },
    { key: 'seeded', value: true },
  ])

  if (navigator.storage?.persist) {
    await navigator.storage.persist()
  }
}
