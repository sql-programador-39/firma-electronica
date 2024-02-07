import Nav from "../../components/Nav/Nav"
import AsideMenu from "../../components/AsideMenu/AsideMenu"
import './ControlPanel.css'
import PieChart from "../../components/PieChart/PieChart"
import BarChart from "../../components/BarsChart/BarChart"
import LineChart from "../../components/LineChart/LineChart"

const ControlPanel = () => {
  return (
    <>
      <div>
        <Nav />
      </div>

      <div className="container-control">
        <div>
          <aside>
            <AsideMenu />
          </aside>  
        </div>

        <div>
          <h1>Panel de control</h1>

          <section className="charts-section">
            <div>
              <h3>Afiliaciones</h3>
              <div>
                <PieChart />
              </div>
            </div>

            <div>
              <h3>Actualización de datos</h3>
              <div>
                <BarChart />
              </div>
            </div>

            <div>
              <h3>Solicitud de créditos</h3>
              <div>
                <LineChart />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ControlPanel
