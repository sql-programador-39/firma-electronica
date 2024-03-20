import { formatDate } from '../../helpers/formatDate';
import './CardAccion.css'

const CardAccion = ({data}) => {

  const {actionEvent, actionStatus, actionDate} = data;

  return (
    <>
      <div className="card-accion">
        <div>
          <h4>Acción</h4>
          <p>{ actionEvent }</p>
        </div>

        <div>
          <div>
            <p>{ actionStatus }</p>
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
