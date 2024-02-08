import { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const AsideMenu = () => {

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      label: <div onClick={toggleCollapsed}>Menu</div>,
      key: '1',
      icon: <div onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>,
      type: 'button'
    },
    getItem(<Link to="/control-panel">Panel de control</Link>, '2', <PieChartOutlined />),
  ];

  return (
    <div
      style={{
        width: 256, // Modifica el ancho del menú según si está colapsado o no
        height: '90vh',
      }}
    >
      <Menu
        defaultSelectedKeys={['2']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        style={{
          height: '100%',
        }}
      />
    </div>
  );
}

export default AsideMenu
