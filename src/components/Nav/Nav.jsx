import { Dropdown, Space } from 'antd';
import { useAuth } from 'react-oidc-context';

import LogoOpa from '../../assets/Logo-opa.png';
import user from '../../assets/user.png';

import './Nav.css';

const Nav = () => {
  
  const auth = useAuth();

  const items = [
    {
      label: <div onClick={() => void auth.signoutRedirect()}>Cerrar sesión</div>,
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
          <div>
            
            <Space>
              OPA S.A.S
              <div className='drop-icon'>
                <img src={user} alt="user" />
              </div>
            </Space>
          </div>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Nav
