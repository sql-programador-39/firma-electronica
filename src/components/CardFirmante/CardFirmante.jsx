import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import './CardFirmante.css'

const CardFirmante = ({data}) => {
  
  const {nombre, identificacion, email, telefono} = data;
  
  return (
    <>
      <div className="card-firmante">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <p>Nombre:</p>
          <p>{ nombre }</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faAddressCard} />
          <p>Identificación:</p>
          <p>{ identificacion }</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Email:</p>
          <p>{ email }</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faPhone} />
          <p>Telefono:</p>
          <p>{ telefono }</p>
        </div>
      </div> 
    </>
  )
}

export default CardFirmante
