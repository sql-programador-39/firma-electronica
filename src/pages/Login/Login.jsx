import { Form } from "react-router-dom" 

import InfoLogin from "../../components/InfoLogin/InfoLogin"
import FormLogin from "../../components/FormLogin/FormLogin"

import './Login.css'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="info-login">
          <InfoLogin />
        </div>

        <Form className="form-login">
          <FormLogin />
        </Form>
      </div>    
    </>
  )
}

export default Login
