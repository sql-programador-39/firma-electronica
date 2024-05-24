import { Link } from "react-router-dom"
import Doughnut from "../Doughnut/Doughnut"
import CardIn from "./CardIn"
import { faCircleCheck, 
          faChartLine, 
          faCircleXmark, 
          faRectangleList, 
          faTriangleExclamation, 
          faFileImport,
          faClipboardCheck
        } from '@fortawesome/free-solid-svg-icons'
import './CardControl.css'

const CardControl = ({ 
  title, 
  completed, 
  requested, 
  expired, 
  notCompleted, 
  submit, 
  confirmed, 
  total, 
  link }) => {

  return (
    <>
      <div className="card-header">
        <h2>{title}</h2>
        <Link to={link} className="button-card">
          Ver más
        </Link>
      </div>

      <div className="grid-card">
        <div className="total-doughnut" >
          <Doughnut 
            completed={completed}
            requested={requested}
            expired={expired}
            notCompleted={notCompleted}
            submit={submit}
            confirmed={confirmed}
          />
          
          <div>
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>

        <div className="info-grid">
          <div className="card-green grid-card-in">
            <CardIn 
              title="Completadas"
              number={completed}
              icon={faCircleCheck}
              icon2={faChartLine}
            />
          </div>

          <div className="card-blue grid-card-in">
            <CardIn 
              title="Solicitadas"
              number={requested}
              icon={faRectangleList}
              icon2={faChartLine}
            />
          </div>

          <div className="card-purple grid-card-in">
            <CardIn 
              title="Confirmadas"
              number={confirmed}
              icon={faClipboardCheck}
              icon2={faChartLine}
            />
          </div>

          <div className="card-yellow grid-card-in">
            <CardIn 
              title="Radicadas"
              number={submit}
              icon={faFileImport}
              icon2={faChartLine}
            />
          </div>
            
          <div className="card-red grid-card-in">
            <CardIn 
              title="No completadas"
              number={notCompleted}
              icon={faCircleXmark}
              icon2={faChartLine}
            />
          </div>

          <div className="card-gray grid-card-in">
            <CardIn
              title="Vencidas"
              number={expired}
              icon={faTriangleExclamation}
              icon2={faChartLine}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardControl
