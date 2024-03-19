import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ControlPanel from './pages/ControlPanel/ControlPanel'
import Login from './pages/Login/Login'
import ProtectedRoute from './pages/ControlPanel/ProtectedRoute'
import { AuthProvider } from './auth/AuthProvider.jsx'
import { NoveltyProvider } from './context/NoveltyProvider.jsx'
import Afiliaciones from './pages/Afiliaciones/Afiliaciones.jsx'
import Actualization from './pages/Actualization/Actualization.jsx'
import Credits from './pages/Credits/Credits.jsx'
import Layout from './Layout/Layout'
import Pruebas from './pages/Pruebas.jsx'

const router = createBrowserRouter([
    { 
      path: '/', 
      element: <Login />,
    },
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/control-panel',
              element: <ControlPanel />,
            },
            {
              path: '/afiliaciones',
              element: <Afiliaciones />,
            },
            {
              path: 'actualizacion-datos',
              element: <Actualization />,
            },
            {
              path: 'solicitudes-credito',
              element: <Credits />,
            }
          ],
        }
      ],
    },
    {
      path: '/api-pruebas',
      element: <Pruebas />,
    }
    
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NoveltyProvider>
        <RouterProvider router={router} />
      </NoveltyProvider>
    </AuthProvider>
  </React.StrictMode>,
)
