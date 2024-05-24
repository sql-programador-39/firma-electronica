import logoOpa from '../../assets/Logo-opa.png';
import './FormLogin.css';

const FormLogin = ({ handleClick }) => {
  return (
    <>
      <div className='card-login-form'>
        <img src={logoOpa} alt="logo de opa" width={"400px"} height={"250px"} />
        {/* <h2>Iniciar sesión en la plataforma de firmas electrónicas</h2> */}

        <div>
          <button onClick={handleClick}>Iniciar Sesión</button>
        </div>
      </div>
    </>
  )
}

export default FormLogin
