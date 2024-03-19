import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import './CardFirmante.css'

const CardFirmante = ({data}) => {
  
  const { fullName, identification, email, phone } = data;
  
  return (
    <>
      <div className="card-firmante">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <p>Nombre:</p>
          <p>{ fullName }</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faAddressCard} />
          <p>Identificación:</p>
          <p>{ identification }</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Email:</p>
          <p>{ email }</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faPhone} />
          <p>Telefono:</p>
          <p>{ phone }</p>
        </div>
      </div> 
    </>
  )
}

export default CardFirmante
