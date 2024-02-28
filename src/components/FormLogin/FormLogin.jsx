import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Form } from 'react-router-dom';
import { Switch } from 'antd';

import useAuth from '../../hooks/useAuth';
import clientAxios from '../../config/clientAxios';

import ErrorAlert from '../ErrorAlert/ErrorAlert';

import './FormLogin.css';

const FormLogin = () => {

  const navigate = useNavigate();

  const { setIsAuthenticaded } = useAuth()

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleSubmit = async e => {
    
    e.preventDefault();

  

    if ([user.trim(), password.trim()].includes('')){
      setAlert({
        msg: 'Todos los campos son obligatorios',
      });

      setTimeout(() => {
        setAlert({});
      }, 4000);

      return;
    }

    if (!emailRegex.test(user)) {
      setAlert({
        msg: 'El correo electronico no es valido',
      });

      setTimeout(() => {
        setAlert({});
      }, 4000);

      return;
    }

    /* try {
      const { data } = await clientAxios.post('/auth/login', 
      {
        email: user,
        password: password,
      })
      
      localStorage.setItem('token', data.token);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg
      })
    } */

    setIsAuthenticaded(true);
    setAlert({});
    setUser('');
    setPassword('');
    navigate('/control-panel');
  }

  return (
    <>
      {/* Form */}

      <Form className='form-login' onSubmit={handleSubmit} noValidate>
        <h2>Inciar sesión</h2>

        <div className='form-input'>
          <label htmlFor="user">Usuario</label>
          <input 
            type="email" 
            id="user" 
            name="user"
            placeholder='Correo Electronico'
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>

        <div className='form-input'>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password"
            id="password" 
            name="password"
            placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>


        {/* Switch */}

        <div className='switch'>
          <Switch id="switch-login" title="switchLogin" onChange={onChange} style={{ background: "#6f6f6f" }} />
          <div style={{color: "#6f6f6f", fontSize: "1.1rem"}}>Recuerdame</div>
        </div>

        {/* Alert */}

        {alert.msg && <ErrorAlert msg={alert.msg} />}

        {/* {alert2 && (
          <Alert 
            msg='Usuario o contraseña incorrectos'
            type='error'
          />
        )} */}

        <div className='submit-button'>
          <input type="submit" 
            value="Iniciar sesión" 
            className="button-login"
          />
        </div>
      </Form>
    </>
  )
}

export default FormLogin
