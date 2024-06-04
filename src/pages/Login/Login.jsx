import { Navigate } from "react-router-dom"

import { useAuth } from "react-oidc-context"

import InfoLogin from "../../components/InfoLogin/InfoLogin"
import FormLogin from "../../components/FormLogin/FormLogin"
import LoadingLogin from "../../components/LoadingLogin/LoadingLogin"

const Login = () => {

  const auth = useAuth()

  const handleClick = () => {
    auth.signinRedirect()
  }

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
      return <LoadingLogin 
        text="Ocurrio algo con el inicio de sesión, por favor intentarlo nuevamente..."
        error={true}
      />;
  }

  return (
    <> 
      { auth.isAuthenticated ? <Navigate to="/" /> : (
        <div className="login">
          <div className="bg-info">
            <div className="info-login">
              <InfoLogin />
            </div>
          </div>
          
          <FormLogin handleClick={handleClick} />
        </div>   
      )} 
    </>
  )
}
 


export default Login
