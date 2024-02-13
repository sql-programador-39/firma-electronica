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
      style={{ height: '90vh', position: 'fixed' }}
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
