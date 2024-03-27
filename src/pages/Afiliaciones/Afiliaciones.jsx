import { Link } from 'react-router-dom';
import TableInfo from '../../components/Table/TableInfo'
import './Afiliaciones.css';

const Afiliaciones = () => {
  return (
    <div>
      <div className='title-table'>
        <h1>Afiliaciones</h1>
        { innerWidth <= 540 ? <Link to="/control-panel" className='button-card'>Volver</Link> : null }
      </div>

      <TableInfo />
    </div>
  )
}

export default Afiliaciones
