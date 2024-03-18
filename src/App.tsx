import { FirebaseAppProvider } from 'reactfire'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const router = createBrowserRouter(
  createRoutesFromElements([])
)

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense>
        <FirebaseAppProvider suspense>
          <RouterProvider router={router} />
        </FirebaseAppProvider>
      </Suspense>
    </ErrorBoundary>
  )
}
