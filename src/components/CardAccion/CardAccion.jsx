import { formatDate } from '../../helpers/formatDate';
import './CardAccion.css'

const CardAccion = ({data}) => {

  const { actionEventMessage, actionStatusMessage, actionDate} = data;

  return (
    <>
      <div className="card-accion">
        
        <h4>Acción</h4>
        <p>{  actionEventMessage }</p>
        

        <div>
          <div>
            <p>{ actionStatusMessage }</p>
          </div>

          <div>
            <p>{ formatDate(actionDate) }</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default CardAccion
