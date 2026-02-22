import { create } from 'zustand'

interface AppState {
  restTimerActive: boolean
  restTimerSeconds: number
  restTimerRemaining: number
  toasts: Toast[]

  startRestTimer: (seconds: number) => void
  stopRestTimer: () => void
  tickRestTimer: () => void
  addToast: (message: string, type: Toast['type']) => void
  removeToast: (id: string) => void
}

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
}

export const useAppStore = create<AppState>((set) => ({
  restTimerActive: false,
  restTimerSeconds: 90,
  restTimerRemaining: 0,
  toasts: [],

  startRestTimer: (seconds: number) =>
    set({ restTimerActive: true, restTimerSeconds: seconds, restTimerRemaining: seconds }),

  stopRestTimer: () =>
    set({ restTimerActive: false, restTimerRemaining: 0 }),

  tickRestTimer: () =>
    set((state) => {
      if (state.restTimerRemaining <= 1) {
        return { restTimerActive: false, restTimerRemaining: 0 }
      }
      return { restTimerRemaining: state.restTimerRemaining - 1 }
    }),

  addToast: (message: string, type: Toast['type']) =>
    set((state) => ({
      toasts: [...state.toasts, { id: Date.now().toString(), message, type }],
    })),

  removeToast: (id: string) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}))
