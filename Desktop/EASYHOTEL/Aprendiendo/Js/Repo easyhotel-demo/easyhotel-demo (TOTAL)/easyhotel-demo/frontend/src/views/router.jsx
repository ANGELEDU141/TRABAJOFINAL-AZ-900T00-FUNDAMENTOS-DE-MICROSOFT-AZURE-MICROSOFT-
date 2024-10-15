import { createBrowserRouter } from 'react-router-dom'

import Welcome from './welcome'
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import ForgotPassword from './auth/forgot-password/ForgotPassword'
import ErrorBoundary from './error'
import Infoapp from './infoapp'
import ROUTE_DASHBOARD from './dashboard/route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/registro',
    element: <Register />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/recuperar-contraseña',
    element: <ForgotPassword />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/info-app',
    element: <Infoapp />,
    errorElement: <ErrorBoundary />,
  },
  ROUTE_DASHBOARD,
])

export default router
