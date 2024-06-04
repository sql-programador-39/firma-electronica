import { useEffect } from "react"
import { useAuth } from "react-oidc-context"
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom"
import LoadingLogin from "../../components/LoadingLogin/LoadingLogin"

const ProtectedRoute = () => {

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const currentURL = window.location.href
    
    if(location.pathname === '/'){
      if(currentURL !== import.meta.env.VITE_URL_REDIRECT && auth.isAuthenticated){
        navigate('/')
      }
    }
  }, [auth.isAuthenticated])

  switch (auth.activeNavigator) {
    case "signinSilent":
        return <LoadingLogin text="Ingresando..." />;
    case "signoutRedirect":
        return <LoadingLogin text="Cerrando Sesión..." />;
  }

  if (auth.isLoading) {
      if(location.pathname === '/'){
        return <LoadingLogin text="Cargando..." />;
      } else {
        return null
      }
  }

  if (auth.error) {
      return <LoadingLogin
        text="Ocurrio algo con el inicio de sesión, por favor intentarlo nuevamente..."
        error={true}
      />;
  }

  return (
    <>
      { auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" /> }	
    </>
  )

}

export default ProtectedRoute
