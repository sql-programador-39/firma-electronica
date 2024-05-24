import { useEffect } from "react"
import { useAuth } from "react-oidc-context"
import { useNavigate, Outlet } from "react-router-dom"
import LoadingLogin from "../../components/LoadingLogin/LoadingLogin"

const ProtectedRoute = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const currentURL = window.location.href;

    if(currentURL !== import.meta.env.VITE_URL_REDIRECT && auth.isAuthenticated){
      navigate('/')
    }

    if(currentURL.includes("error")){
      navigate('/login')
    }

  }, [auth.isAuthenticated])

  switch (auth.activeNavigator) {
    case "signinSilent":
        return <LoadingLogin text="Ingresando..." />;
    case "signoutRedirect":
        return <LoadingLogin text="Cerrando Sesión..." />;
  }

  if (auth.isLoading) {
      return <LoadingLogin text="Cargando..." />;
  }

  if (auth.error) {
      return <LoadingLogin text="Ocurrio algo con el inicio de sesión, por favor intentarlo nuevamente..." />;
  }

  return auth.isAuthenticated ? <Outlet /> : navigate('/login')

}

export default ProtectedRoute
