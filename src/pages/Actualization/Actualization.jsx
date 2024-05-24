import { Link } from 'react-router-dom';
import TableInfo from '../../components/Table/TableInfo';
import '../Afiliaciones/Afiliaciones.css';

const Actualization = () => {
  return (
    <div>
      <div className='title-table'>
        <h1>Actulización de datos</h1>
        { innerWidth <= 540 ? <Link to="/control-panel" className='button-card'>Volver</Link> : null }
      </div>

      <TableInfo />
    </div>
  )
}

export default Actualization
