import ErrorBoundary from '../error/ErrorBoundary'

import Dashboard from './layouts/Dashboard'

import RegisterBusiness from './register-business/RegisterBusiness'
import RegisterEstablishments from './register-establishment/RegisterEstablishments'
import UserSettings from './user-settings/UserSettings'

export const route = {
  path: '/dashboard',
  element: <Dashboard />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: 'registrar-negocio',
      element: <RegisterBusiness />,
    },
    {
      path: 'registrar-establecimiento',
      element: <RegisterEstablishments />,
    },
    {
      path: 'ajustes-del-perfil',
      element: <UserSettings />,
    },
  ],
}

export default route
