import './CardAccion.css'

const CardAccion = ({data}) => {

  const {descripcion, estado, fecha} = data;

  return (
    <>
      <div className="card-accion">
        <div>
          <h4>Acción</h4>
          <p>{ descripcion }</p>
        </div>

        <div>
          <div>
            <p>{ estado }</p>
          </div>

          <div>
            <p>{ fecha }</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default CardAccion
