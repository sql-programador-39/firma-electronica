import { Link } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import user from '../../assets/user.png';

import LogoOpa from '../../assets/Logo-opa.png';

import './Nav.css';

const items = [
  {
    label: <Link to="/control-panel">Cerrar sesión</Link>,
    key: '0',
  },
];

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='nav-title'>
          <img src={LogoOpa} alt="Logo-opa" />
          <p>Firma Electrónica</p>
        </div>

        <div className='drop'>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Click me
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
