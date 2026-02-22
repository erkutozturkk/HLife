import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy, Suspense } from 'react'
import { AppShell } from '@/components/layout/AppShell.tsx'

const DashboardPage = lazy(() => import('@/pages/DashboardPage.tsx'))
const WorkoutPage = lazy(() => import('@/pages/WorkoutPage.tsx'))
const NutritionPage = lazy(() => import('@/pages/NutritionPage.tsx'))
const CarePage = lazy(() => import('@/pages/CarePage.tsx'))
const ProgressPage = lazy(() => import('@/pages/ProgressPage.tsx'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage.tsx'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: 'workout',
        element: (
          <Suspense fallback={<PageLoader />}>
            <WorkoutPage />
          </Suspense>
        ),
      },
      {
        path: 'nutrition',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NutritionPage />
          </Suspense>
        ),
      },
      {
        path: 'care',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CarePage />
          </Suspense>
        ),
      },
      {
        path: 'progress',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProgressPage />
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
