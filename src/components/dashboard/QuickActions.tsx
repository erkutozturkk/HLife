import { useNavigate } from 'react-router'

const actions = [
  { label: 'Antrenman', icon: '💪', path: '/workout', color: 'bg-cyan-500/20' },
  { label: 'Beslenme', icon: '🍗', path: '/nutrition', color: 'bg-orange-500/20' },
  { label: 'Bakim', icon: '✨', path: '/care', color: 'bg-pink-500/20' },
  { label: 'Foto Ekle', icon: '📸', path: '/progress', color: 'bg-purple-500/20' },
]

export function QuickActions() {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-4 gap-2">
      {actions.map((action) => (
        <button
          key={action.path}
          onClick={() => navigate(action.path)}
          className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl ${action.color} active:scale-95 transition-transform`}
        >
          <span className="text-2xl">{action.icon}</span>
          <span className="text-[10px] text-slate-300 font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  )
}
