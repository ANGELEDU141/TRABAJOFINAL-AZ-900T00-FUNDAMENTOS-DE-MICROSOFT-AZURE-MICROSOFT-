import { Toaster } from 'sonner'

import './css/normalize.css'
import './css/variables.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './views/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  </React.StrictMode>
)
