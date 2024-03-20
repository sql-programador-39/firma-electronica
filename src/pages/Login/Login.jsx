import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

import InfoLogin from "../../components/InfoLogin/InfoLogin"

import FormLogin from "../../components/FormLogin/FormLogin"

import './Login.css'

const Login = () => {

  const { isAuthenticaded } = useAuth()


  return (
    <>

      { isAuthenticaded && <Navigate to="/control-panel" />}


      <div className="login">
        <div className="bg-info">
          <div className="info-login">
            <InfoLogin />
          </div>
        </div>
        
        <FormLogin />
      </div>    
    </>
  )
}

export default Login
