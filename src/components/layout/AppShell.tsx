import { Outlet } from 'react-router'
import { BottomNav } from './BottomNav.tsx'
import { Header } from './Header.tsx'
import { OfflineBanner } from '@/components/common/OfflineBanner.tsx'
import { ToastContainer } from '@/components/common/Toast.tsx'

export function AppShell() {
  return (
    <div className="flex flex-col h-dvh bg-bg-primary">
      <Header />
      <OfflineBanner />
      <ToastContainer />
      <main className="flex-1 overflow-y-auto scroll-container no-scrollbar pb-20">
        <div className="max-w-lg mx-auto px-4 py-4">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
