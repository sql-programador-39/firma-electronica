import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Empty } from 'antd';
import Highlighter from 'react-highlight-words';
import ModalDetails from '../Modal/ModalDetails';
import useNovelty from '../../hooks/useNovelty';

import '../../components/CardControl/CardControl.css';
import './TableInfo.css';

const paginationConfig = {
  pageSize: 8
};

const TableInfo = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [infoTable, setInfoTable] = useState([]);
  const searchInput = useRef(null);

  const { afiliaciones, actualizaciones, solicitudes } = useNovelty();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/afiliaciones') {
      
      if(afiliaciones.NoveltysInfo === undefined) return

      const newArray = afiliaciones.NoveltysInfo.map((item) => {
        return {
          key: item.id,
          solicitud: item.solicitud,
          nombre: item.nombre,
          estado: item.estado,
          fecha: item.fechaEstado,
          detalle: <ModalDetails data={[item]} />
        }
      })

      setInfoTable(newArray);

    } else if (location.pathname === '/actualizacion-datos') {
      
      if(actualizaciones.NoveltysInfo === undefined) return

      const newArray = actualizaciones.NoveltysInfo.map((item) => {
        return {
          key: item.id,
          solicitud: item.solicitud,
          nombre: item.nombre,
          estado: item.estado,
          fecha: item.fechaEstado,
          detalle: <ModalDetails data={[item]} />
        }
      })

      setInfoTable(newArray);

    } else if (location.pathname === '/solicitudes-credito') {

      if(solicitudes.NoveltysInfo === undefined) return

      const newArray = solicitudes.NoveltysInfo.map((item) => {
        return {
          key: item.id,
          solicitud: item.solicitud,
          nombre: item.nombre,
          estado: item.estado,
          fecha: item.fechaEstado,
          detalle: <ModalDetails data={[item]} />
        }
      })

      setInfoTable(newArray);

    }

  }, [afiliaciones, actualizaciones, solicitudes]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={ e => e.stopPropagation() }
      >
        <Input
          ref={ searchInput }
          placeholder={ `Search ${dataIndex}` }
          value={selectedKeys[0]}
          onChange={ e => setSelectedKeys(e.target.value ? [e.target.value] : []) }
          onPressEnter={ () => handleSearch(selectedKeys, confirm, dataIndex) }
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={ () => handleSearch(selectedKeys, confirm, dataIndex) }
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={ () => clearFilters && handleReset(clearFilters) }
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={ () => {
              confirm({
                closeDropdown: false,
              } );
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={ () => close() }
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={ [searchText] }
          autoEscape
          textToHighlight={ text ? text.toString() : '' }
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'N solicitud',
      dataIndex: 'solicitud',
      key: 'solicitud',
      sorter: (a, b) => a.solicitud - b.solicitud,
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
      ...getColumnSearchProps('nombre'),
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      filters: [
        {
          text: 'Completada',
          value: 'Completada',
        },
        {
          text: 'Radicada',
          value: 'Radicada'
        },
        {
          text: 'Rechazada',
          value: 'Rechazada'
        },
        {
          text: 'Solicitada',
          value: 'Solicitada'
        },
        { 
          text: 'Vencida',
          value: 'Vencida'
        }
      ],
      onFilter: (value, record) => record.estado.includes(value),
      ellipsis: true,
    },
    {
      title: 'Fecha estado',
      dataIndex: 'fecha',
      key: 'fecha',
      ...getColumnSearchProps('fecha'),
    },
    {
      title: 'Detalle',
      dataIndex: 'detalle',
      key: 'detalle',
    }
  ];

  return (
    <>
      <Table locale={{ emptyText: (<Empty image={ Empty.PRESENTED_IMAGE_DEFAULT } description={ false }>
        <p>No se encontraron registros</p>
      </Empty>) }} dataSource={ infoTable } columns={ columns } pagination={ paginationConfig } />  
    </>
  )
}

export default TableInfo
