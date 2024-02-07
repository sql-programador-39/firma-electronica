import { Switch } from 'antd';

import './FormLogin.css';

const FormLogin = () => {


  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <h2>Inciar sesión</h2>
      {/* Form */}

      <div className='form-input'>
        <label htmlFor="user">Usuario</label>
        <input 
          type="text" 
          id="user" 
          name="user"
          placeholder='Correo Electronico'
        />
      </div>

      <div className='form-input'>
        <label htmlFor="password">Contraseña</label>
        <input 
          type="password"
          id="password" 
          name="password"
          placeholder='Contraseña'
        />
      </div>


      {/* Switch */}

      <div className='switch'>
        <Switch onChange={onChange} />
        <div>Recuerdame</div>
      </div>

      <div>
        <input type="submit" 
          value="Iniciar sesión" 
          className="button-login"
        />
      </div>
    </>
  )
}

export default FormLogin
