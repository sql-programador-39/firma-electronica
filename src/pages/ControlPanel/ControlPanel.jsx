import PieChart from "../../components/PieChart/PieChart"
import BarChart from "../../components/BarsChart/BarChart"
import LineChart from "../../components/LineChart/LineChart"
import CardControl from "../../components/CardControl/CardControl"

import './ControlPanel.css'

const ControlPanel = () => {
  return (
    <>
      <div className="control-panel-info">
        <h1>Panel de control</h1>

        <section className="charts-section">
          <div>
            <h3>Distribución documentos firmados</h3>
            <div>
              <PieChart />
            </div>
          </div>

          <div>
            <h3>Solicitudes de firma enviadas</h3>
            <div>
              <BarChart />
            </div>
          </div>

          <div>
            <h3>Estado de solicitudes</h3>
            <div>
              <LineChart />
            </div>
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
