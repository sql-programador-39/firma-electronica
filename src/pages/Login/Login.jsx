import InfoLogin from "../../components/InfoLogin/InfoLogin"
import FormLogin from "../../components/FormLogin/FormLogin"

import './Login.css'

const Login = () => {
  return (
    <>
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
