import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Empty } from 'antd';
import Highlighter from 'react-highlight-words';

import useNovelty from '../../hooks/useNovelty';
import { useAuth } from "react-oidc-context"

import ModalDetails from '../Modal/ModalDetails';

import { formatDate } from '../../helpers/formatDate';
import { changeStatusName } from '../../helpers/changeNames';

import '../../components/CardControl/CardControl.css';
import './TableInfo.css';


const TableInfo = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 8,
    },
  });

  const location = useLocation();
  const {dateI, dateF} = useNovelty();
  const auth = useAuth();

  useEffect(() => {
    setInfoTable();
  }, []);

  useEffect(() => {
    if (tableParams.pagination?.current && tableParams.pagination?.pageSize) {
      setInfoTable();
    }
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

  const setInfoTable = () => {
    if (location.pathname === '/afiliaciones') {
      getDataTable("Affiliation");
    } else if (location.pathname === '/solicitudes-credito'){
      getDataTable("CreditRequest");
    } else if (location.pathname === '/actualizacion-datos'){
      getDataTable("DataUpdate");
    }
  }

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const getDataTable = async (path) => {

    const url = import.meta.env.VITE_URL + `/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=${"1a1af3d7-c892-4e80-8225-4a1d5fa1e417"}&PageSize=${tableParams.pagination.pageSize}&PageNumber=${tableParams.pagination.current}&StartDate=${dateI}&EndDate=${dateF}&ReportType=${path}`
    
    try {
      setLoading(true);
      const response = await fetch(url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.user.access_token}`
          }
        }
      )
      const data = await response.json()

      if(response.status !== 200) {
        setLoading(false);
        throw new Error(data.message);
      }

      const dataTable = data.object.map((item) => {
        return {
          key: item.id,
          solicitud: item.requestNumber,
          nombre: item.fullName,
          estado: changeStatusName(item.estadoSolicitud),
          fecha: formatDate(item.lastDateModification),
          channel: item.channel,
          detalle: <ModalDetails dataModal={item} />
        }
      })

      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: data.totalRecords,
        },
      });

      setData(dataTable);
    } catch (error) {
      setLoading(false); 
      throw new Error(error);
    }
  }

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
      ...getColumnSearchProps('solicitud'),
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
      title: 'Última Modificación',
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
      </Empty>) }} columns={columns}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}/>  
    </>
  )
}

export default TableInfo
