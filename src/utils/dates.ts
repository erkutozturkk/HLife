export function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

export function formatDateTR(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function formatDateShortTR(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'short',
  })
}

export function formatWeekdayTR(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    weekday: 'long',
  })
}

export function getDayOfWeek(dateStr: string): number {
  const d = new Date(dateStr)
  const day = d.getDay()
  return day === 0 ? 7 : day
}

export function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export function daysBetween(from: string, to: string): number {
  const a = new Date(from)
  const b = new Date(to)
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

export function getCurrentHour(): number {
  return new Date().getHours()
}
