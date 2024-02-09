import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import './CardFirmante.css'

const CardFirmante = () => {
  return (
    <>
      <div className="card-firmante">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <p>Nombre:</p>
          <p>Camilo Alejandro Ardila Molina</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faAddressCard} />
          <p>Identificación:</p>
          <p>1152369852</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Email:</p>
          <p>correo@correo.com</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faPhone} />
          <p>Telefono:</p>
          <p>56889645</p>
        </div>
      </div> 
    </>
  )
}

export default CardFirmante
