import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ControlPanel from './pages/ControlPanel/ControlPanel'
import Login from './pages/Login/Login'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute.jsx'
import { AuthProvider } from "react-oidc-context";
import { NoveltyProvider } from './context/NoveltyProvider.jsx'
import Afiliaciones from './pages/Afiliaciones/Afiliaciones.jsx'
import Actualization from './pages/Actualization/Actualization.jsx'
import Credits from './pages/Credits/Credits.jsx'
import Layout from './Layout/Layout'

import './index.css'

const routes = ([
  { 
    path: '/login', 
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
            path: '/', 
            element: <ControlPanel /> 
          },
          { 
            path: '/afiliaciones', 
            element: <Afiliaciones /> 
          },
          { 
            path: '/actualizacion-datos', 
            element: <Actualization /> 
          },
          { 
            path: '/solicitudes-credito', 
            element: <Credits /> 
          }
        ],
      }
    ],
  }
  ]);

  export const router = createBrowserRouter( routes );

  const oidcConfig = {
    authority: "https://creditosdigitales.opa.com.co/auth",
    client_id: "opa-digitalsignature-demo-dashboard",
    redirect_uri: window.location.origin + '/',
    scope: "openid profile email opa-digitalsignature-api",
    post_logout_redirect_uri: window.location.origin + '/',
  };  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <NoveltyProvider>
        <RouterProvider router={router} />
      </NoveltyProvider>
    </AuthProvider>
  </React.StrictMode>,
)
