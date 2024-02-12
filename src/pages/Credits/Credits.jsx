import { Table } from 'antd';
import ModalDetails from '../../components/Modal/ModalDetails';

import '../../components/CardControl/CardControl.css';
import '../Afiliaciones/Afiliaciones.css';

const dataSource = [
  {
    key: '1',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '2',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '3',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '4',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '5',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '6',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '7',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '8',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '9',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '10',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '11',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
  },
  {
    key: '12',
    solicitud: '15268',
    nombre: 'Mike',
    estado: 'Completada',
    fecha: '12/12/2021',
    detalle: <ModalDetails />
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
  pageSize: 9,
};

const Credits = () => {
  return (
    <div style={{marginBottom: "20px"}}>
      <h1>Solicitud de crédito</h1>

      <Table dataSource={dataSource} columns={columns} pagination={paginationConfig}/>
    </div>
  )
}

export default Credits
  