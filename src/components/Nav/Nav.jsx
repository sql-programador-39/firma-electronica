import { Link, useNavigate  } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import user from '../../assets/user.png';
import useAuth from '../../hooks/useAuth';

import LogoOpa from '../../assets/Logo-opa.png';

import './Nav.css';


const Nav = () => {
  
  const navigate = useNavigate();

  const { setIsAuthenticaded } = useAuth();
  
  const handleClick = () => {
    localStorage.removeItem('token');

    setIsAuthenticaded(false);
    navigate('/');
  }

  const items = [
    {
      label: <div onClick={handleClick}>Cerrar sesión</div>,
      key: '0',
    },
  ];

  return (
    <nav className='navbar'>
      <div className='nav-title'>
        <img src={LogoOpa} alt="Logo-opa" />
        <p>Firma Electrónica</p>
      </div>

      <div className='drop'>
        <Dropdown
          menu={{ items }}
          trigger={['click']}
        >
          <a>
            <Space>
              OPA S.A.S
              <div className='drop-icon'>
                <img src={user} alt="user" />
              </div>
            </Space>
          </a>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Nav
