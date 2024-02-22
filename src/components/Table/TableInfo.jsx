import { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Empty } from 'antd';
import Highlighter from 'react-highlight-words';

import ModalDetails from '../Modal/ModalDetails';
import '../../components/CardControl/CardControl.css';

const dataSource = [
  {
    key: '1',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data={[{
        nombre: 'Mike',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            email: 'correo@correo.com',
            telefono: '1234567890'
          },
          {
            nombre: 'Mike 2',
            identificacion: '1128456987',
            email: 'correo@correo.com',
            telefono: '1234567890'
          }
        ],
        acciones: [
          {
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            estado: 'Completada'
          },
          {
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            estado: 'Completada'
          },
          {
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            estado: 'Completada'
          },
          {
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            estado: 'Completada'
          },
          {
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            estado: 'Completada'
          },
          {
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            estado: 'Completada'
          }
        ]
      }] }
    />
  },
  {
    key: '2',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Anto',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data={[
        {
          nombre: 'Anto',
          identificacion: '1128456987',
          fechaSolicitud: '2021/12/10',
          estado: 'Completada',
          fechaEstado: '2021/12/12',
          canal: 'Web',
          firmantes: [
            {
              nombre: 'Camilo Alejandro Ardila Molina',
              identificacion: '1128456987',
              email: 'correo@correo.com',
              telefono: '1234567890'
            },
            {
              nombre: 'Mike 2',
              identificacion: '1128456987',
              email: 'correo@correo.com',
              telefono: '1234567890'
            }
          ],
          acciones: [
            {
              nombre: 'Aprobar',
              descripcion: 'Aprobar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Rechazar',
              descripcion: 'Rechazar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Aprobar',
              descripcion: 'Aprobar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Rechazar',
              descripcion: 'Rechazar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Aprobar',
              descripcion: 'Aprobar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Rechazar',
              descripcion: 'Rechazar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            }
          ]
        } 
      ]}
    />
  },
  {
    key: '3',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Sebastian',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data={[
        {
          nombre: 'Sebastian',
          identificacion: '1128456987',
          fechaSolicitud: '2021/12/10',
          estado: 'Completada',
          fechaEstado: '2021/12/12',
          canal: 'Web',
          firmantes: [
            {
              nombre: 'Camilo Alejandro Ardila Molina',
              identificacion: '1128456987',
              email: 'correo@correo.com',
              telefono: '1234567890'
            },
            {
              nombre: 'Mike 2',
              identificacion: '1128456987',
              email: 'correo@correo.com',
              telefono: '1234567890'
            }
          ],
          acciones: [
            {
              nombre: 'Aprobar',
              descripcion: 'Aprobar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Rechazar',
              descripcion: 'Rechazar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Aprobar',
              descripcion: 'Aprobar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Rechazar',
              descripcion: 'Rechazar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Aprobar',
              descripcion: 'Aprobar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            },
            {
              nombre: 'Rechazar',
              descripcion: 'Rechazar solicitud',
              fecha: '2021/12/12',
              usuario: 'Camilo Alejandro Ardila Molina'
            }
          ]
        }
      ]}
    />
  },
  {
    key: '4',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Completada',
    fecha: '12/12/2022',
    detalle: <ModalDetails 
      data= {[{
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            email: 'correo@correo.com',
            telefono: '1234567890'
          },
          {
            nombre: 'Mike 2',
            identificacion: '1128456987',
            email: 'correo@correo.com',
            telefono: '1234567890'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '5',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            email: 'correo@correo.com',
            telefono: '1234567890'
          },
          {
            nombre: 'Mike 2',
            identificacion: '1128456987',
            email: 'correo@correo.com',
            telefono: '1234567890'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '6',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Rechazada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          },
          {
            nombre: 'Miguel 2',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '7',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          },
          {
            nombre: 'Miguel 2',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '8',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          },
          {
            nombre: 'Miguel 2',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '9',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          },
          {
            nombre: 'Miguel 2',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '10',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          },
          {
            nombre: 'Miguel 2',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  },
  {
    key: '11',
    solicitud: Math.floor(Math.random() * 100000) + 1,
    nombre: 'Miguel',
    estado: 'Vencida',
    fecha: '12/10/2021',
    detalle: <ModalDetails 
      data= {[{
        
        nombre: 'Miguel',
        identificacion: '1128456987',
        fechaSolicitud: '2021/12/10',
        estado: 'Completada',
        fechaEstado: '2021/12/12',
        canal: 'Web',
        firmantes: [
          {
            nombre: 'Camilo Alejandro Ardila Molina',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          },
          {
            nombre: 'Miguel 2',
            identificacion: '1128456987',
            cargo: 'Desarrollador',
            dependencia: 'Desarrollo'
          }
        ],
        acciones: [
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Aprobar',
            descripcion: 'Aprobar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          },
          {
            nombre: 'Rechazar',
            descripcion: 'Rechazar solicitud',
            fecha: '2021/12/12',
            usuario: 'Camilo Alejandro Ardila Molina'
          }
        ]
      }]}
        
    />
  }
];

const paginationConfig = {
  pageSize: 8,
};


const TableInfo = () => {

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

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
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
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
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
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
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
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
      <Table locale={{ emptyText: (<Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={false}>
          <p>No se encontraron registros</p>
        </Empty>) }} dataSource={dataSource} columns={columns} pagination={paginationConfig} />  
    </>
  )
}

export default TableInfo
