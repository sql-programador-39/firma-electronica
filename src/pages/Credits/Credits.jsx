
import TableInfo from '../../components/Table/TableInfo';
import { Link } from 'react-router-dom';
import '../Afiliaciones/Afiliaciones.css';

const Credits = () => {
  return (
    <div>
      <div className='title-table'>
        <h1>Solicitud de crédito</h1>
        { innerWidth <= 540 ? <Link to="/" className='button-card'>Volver</Link> : null }
      </div>

      <TableInfo />
    </div>
  )
}

export default Credits
  