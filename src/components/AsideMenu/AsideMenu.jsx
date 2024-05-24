import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './AsideMenu.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AsideMenu = ({collapsed, setCollapsed}) => {

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    getItem(<Link to="/">Panel de control</Link>, '2', <PieChartOutlined />),
  ];

  return (
    <div
      style={{ height: '90vh', position: 'fixed' }}
      className={collapsed ? 'aside-menu-collapsed' : 'aside-menu'}
    >
      <div className={ collapsed ? 'div-menu-collapse' : 'div-menu' } onClick={toggleCollapsed}>
        <button className='button-menu'>
          {collapsed ? <MenuUnfoldOutlined  /> : <MenuFoldOutlined />}
        </button>
      </div>

      <Menu
        defaultSelectedKeys={['2']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        style={{
          height: '100%',
          fontSize: "1.1rem"
        }}
      />
    </div>
  );
}

export default AsideMenu
