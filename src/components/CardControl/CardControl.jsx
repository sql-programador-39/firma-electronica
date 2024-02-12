import { Link } from "react-router-dom"
import PieChart from "../../components/PieChart/PieChart"
import CardIn from "./CardIn"
import { faCircleCheck, 
          faChartLine, 
          faCircleXmark, 
          faRectangleList, 
          faTriangleExclamation, 
          faFileImport } from '@fortawesome/free-solid-svg-icons'
import './CardControl.css'

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
      <div>
        <PieChart />
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
          <CardIn 
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
