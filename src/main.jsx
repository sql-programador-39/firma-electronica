import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ControlPanel from './pages/ControlPanel/ControlPanel'
import Login from './pages/Login/Login'
import ProtectedRoute from './pages/ControlPanel/ProtectedRoute'
import AuthProvider from './auth/authProvider'

const router = createBrowserRouter([

    { 
      path: '/', 
      element: <Login /> 
    },
    /* {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/control-panel',
          element: <ControlPanel />,
        },
      ],
    } */
    {
      path: '/control-panel',
      element: <ControlPanel />,
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
