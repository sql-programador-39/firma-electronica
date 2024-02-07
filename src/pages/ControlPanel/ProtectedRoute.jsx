import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../../auth/authProvider"

const ProtectedRoute = () => {

  const auth = useAuth()

  return (
    <>
      {auth.isAuthenticaded ? <Outlet /> : <Navigate to="/" />} 
    </>
  )
}

export default ProtectedRoute
