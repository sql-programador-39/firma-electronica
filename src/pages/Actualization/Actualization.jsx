import { Table } from 'antd';

import '../../components/CardControl/CardControl.css';

const dataSource = [
  {
    key: '1',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '2',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '3',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '4',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '5',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '6',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '7',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '8',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '9',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '10',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '11',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  },
  {
    key: '12',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <div className='button-card'>Detalle</div>
  }
];

const columns = [
  {
    title: 'N solicitud',
    dataIndex: 'solicitud',
    key: 'solicitud',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
  {
    title: 'Fecha estado',
    dataIndex: 'fecha',
    key: 'fecha',
  },
  {
    title: 'Detalle',
    dataIndex: 'detalle',
    key: 'detalle',
  }
];


const paginationConfig = {
  pageSize: 8,
};

const Actualization = () => {
  return (
    <div>
      <h1>Actualización de datos</h1>

      <Table dataSource={dataSource} columns={columns} pagination={paginationConfig}/>
    </div>
  )
}

export default Actualization
