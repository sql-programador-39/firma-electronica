import { Link } from "react-router-dom"
import Doughnut from "../Doughnut/Doughnut"
import CardIn from "./CardIn"
import { faCircleCheck, 
          faChartLine, 
          faCircleXmark, 
          faRectangleList, 
          faTriangleExclamation, 
          faFileImport } from '@fortawesome/free-solid-svg-icons'
import './CardControl.css'
import CardInGray from "./CardInGray"

const CardControl = ({ title, completadas, solicitadas, vencidas, rechazadas, radicadas, link }) => {

  return (
    <>
      <div className="card-header">
        <h2>{title}</h2>
        <Link to={link} className="button-card">
          Ver más
        </Link>
      </div>

      <div className="grid-card">
        
        <div style={{ height: "100%" }}>
          <Doughnut />
          <div>
            <p>Total</p>
            <p>3698</p>
          </div>
        </div>

        <div className="info-grid">
          <div className="card-green grid-card-in">
            <CardIn 
              title="Completadas"
              number={completadas}
              icon={faCircleCheck}
              icon2={faChartLine}
            />
          </div>

          <div className="card-blue grid-card-in">
            <CardIn 
                title="Solicitadas"
                number={solicitadas}
                icon={faRectangleList}
                icon2={faChartLine}
              />
          </div>

          <div className="card-gray grid-item-third-column">
            <CardInGray 
              title="Vencidas"
              number={vencidas}
              icon={faTriangleExclamation}
              icon2={faChartLine}
            />
          </div>
          <div className="card-red grid-card-in">
            <CardIn 
              title="Rechazadas"
              number={rechazadas}
              icon={faCircleXmark}
              icon2={faChartLine}
            />
          </div>

          <div className="card-yellow grid-card-in">
          <CardIn 
              title="Radicadas"
              number={radicadas}
              icon={faFileImport}
              icon2={faChartLine}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardControl
