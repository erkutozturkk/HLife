import { useEffect } from 'react'
import { useAppStore } from '@/stores/appStore.ts'

const typeStyles = {
  success: 'bg-success/90 text-slate-900',
  error: 'bg-danger/90 text-white',
  info: 'bg-accent/90 text-slate-900',
}

export function ToastContainer() {
  const toasts = useAppStore((s) => s.toasts)
  const removeToast = useAppStore((s) => s.removeToast)

  return (
    <div className="fixed top-16 left-0 right-0 z-[100] flex flex-col items-center gap-2 px-4 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} id={toast.id} message={toast.message} type={toast.type} onDismiss={removeToast} />
      ))}
    </div>
  )
}

function ToastItem({
  id,
  message,
  type,
  onDismiss,
}: {
  id: string
  message: string
  type: 'success' | 'error' | 'info'
  onDismiss: (id: string) => void
}) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), 3000)
    return () => clearTimeout(timer)
  }, [id, onDismiss])

  return (
    <div className={`px-4 py-2 rounded-xl text-sm font-medium shadow-lg pointer-events-auto animate-[slideDown_0.3s_ease-out] ${typeStyles[type]}`}>
      {message}
    </div>
  )
}
