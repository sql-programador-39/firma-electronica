import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons"

import PieChart from "../../components/PieChart/PieChart"
import BarChart from "../../components/BarsChart/BarChart"
import LineChart from "../../components/LineChart/LineChart"
import CardControl from "../../components/CardControl/CardControl"

import './ControlPanel.css'
import '../../components/CardControl/CardControl.css'

const ControlPanel = () => {
  return (
    <>
      <div className="control-panel-info">

        <div className="header-control-panel">
          <div>

            <h1>Panel de control</h1>
          </div>

          <div>

            <FontAwesomeIcon icon={faFilter} />
            <select className="input-control">
              <option value="1">Compañia</option>
              <option value="2">Últimos 30 días</option>
              <option value="3">Últimos 90 días</option>
            </select>
            
            <FontAwesomeIcon icon={faCalendarDays} />
            <input type="date" className="input-control" />

            <input type="date" className="input-control" />
            

            <button className="">
              Exportar
            </button>
          </div>
        </div>

        <section className="charts-section">
          <div>
            <h3>Distribución documentos firmados</h3>
            <PieChart />
          </div>

          <div>
            <h3>Estado de solicitudes</h3>
            <LineChart /> 
          </div>

          <div>
            <h3>Solicitudes de firma enviadas</h3>
            <BarChart />
          </div>
        </section>

        <section>
          <div style={{ margin: '25px 0' }}>
            <CardControl 
              title="Afiliaciones"
              completadas="869"
              solicitadas="485"
              vencidas="120"
              rechazadas="0"
              radicadas="3698"
              link="/afiliaciones"
            />
          </div>
          <div style={{ margin: '25px 0' }}>
            <CardControl 
              title="Actualización de datos"
              completadas="869"
              solicitadas="485"
              vencidas="120"
              rechazadas="0"
              radicadas="3698"
              link="/actualizacion-datos"
            />
          </div>
          <div style={{ margin: '25px 0' }}>
            <CardControl 
              title="Solicitud de crédito"
              completadas="869"
              solicitadas="485"
              vencidas="120"
              rechazadas="0"
              radicadas="3698"
              link="/solicitudes-credito"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default ControlPanel
