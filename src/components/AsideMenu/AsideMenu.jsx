import { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

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
    getItem('Panel de control', '2', <PieChartOutlined />),
    getItem('Afiliaciones', '3', <DesktopOutlined />),
    getItem('Actualización de datos', '4', <ContainerOutlined />),
    getItem('Solicitud de créditos', '5', <ContainerOutlined />),
  ];

  return (
    <div
      style={{
        width: 256, // Modifica el ancho del menú según si está colapsado o no
        height: '100vh', // Establece la altura al 100% del viewport
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
