import { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons"

import PieChart from "../../components/PieChart/PieChart"
import BarChart from "../../components/BarsChart/BarChart"
import BarChartSends from "../../components/BarChartSends/BarChartSends"
import CardControl from "../../components/CardControl/CardControl"

import './ControlPanel.css'
import '../../components/CardControl/CardControl.css'

import { getActualizacion, getAfiliaciones, getCreditos } from "../../api/api"

const ControlPanel = () => {

 /*  const [data, setData] = useState({})
  const [data2, setData2] = useState({})
  const [data3, setData3] = useState({})

  useEffect(() => {
    setData(getAfiliaciones())
    setData2(getActualizacion())
    setData3(getCreditos())
  }, []) */

  const dateNow = new Date();
  
  // Resta 30 días a la fecha actual para obtener la fecha inicial
  const InitalDate = new Date(dateNow);
  InitalDate.setDate(InitalDate.getDate() - 30);

  // Formatea las fechas en formato YYYY-MM-DD
  const FinalDateFormat = dateNow.toISOString().split('T')[0];
  const InitalDateFormat = InitalDate.toISOString().split('T')[0];
  
  const [company, setCompany] = useState("")
  const [dateF, setDateF] = useState(FinalDateFormat);
  const [dateI, setDateI] = useState(InitalDateFormat);

  const afiliaciones = getAfiliaciones()
  const actualizaciones = getActualizacion()
  const solicitudes = getCreditos()

  /* const [afiliaciones, setAfiliaciones] = useState(getAfiliaciones())
  const [actualizaciones, setActualizaciones] = useState(getActualizacion())
  const [solicitudes, setSolicitudes] = useState(getCreditos()) */


  const handleChange = (e) => {

    const { name, value } = e.target

    switch (name) {
      case 'company':
        setCompany(value)
        break;

      case 'dateI':
        setDateI(value)
        break;

      case 'dateF':
        setDateF(value)
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="header-control-panel">
           
        <h1>Panel de control</h1>

        <div>
          <div>
            <FontAwesomeIcon icon={faCalendarDays} />
            <input 
              type="date" 
              className="input-control" 
              onChange={handleChange}
              value={dateI}
              name="dateI"
            />
            <span>-</span>
            <input 
              type="date" 
              className="input-control" 
              onChange={handleChange}
              value={dateF}
              name="dateF"  
            />
          </div>

            <div>
              <div>
                <FontAwesomeIcon icon={faFilter} />
                <select 
                  className="input-control" 
                  onChange={handleChange}
                  value={company}
                  name="company"
                  >
                  <option value="1">Compañias</option>
                  <option value="2">Banco 1</option>
                  <option value="3">Banco 2</option>
                </select>
              </div>


              <button className="button-card">
                Exportar
              </button>
            </div>
        </div>
      </div>

      <section className="charts-section">
        <div>
          <h2>Distribución documentos firmados</h2>
          <PieChart 
            afiliaciones={afiliaciones.completed}
            actualizacion={actualizaciones.completed}
            creditos={solicitudes.completed}
          />
        </div>

        <div>
          <h2>Solicitudes de firma enviadas</h2>
          <BarChartSends 
            afiliaciones={afiliaciones.filed}
            actualizacion={actualizaciones?.filed}
            creditos={solicitudes?.filed}
          /> 
        </div>

        <div>
          <h2>Estado de solicitudes</h2>
          <BarChart 
            afiliaciones={[afiliaciones.completed, afiliaciones.requested, afiliaciones.expired, afiliaciones.rejected, afiliaciones.filed]}
            actualizacion={[actualizaciones.completed, actualizaciones.requested, actualizaciones.expired, actualizaciones.rejected, actualizaciones.filed]}
            creditos={[solicitudes.completed, solicitudes.requested, solicitudes.expired, solicitudes.rejected, solicitudes.filed]}
          />
        </div>
      </section>

      <section>
        <div style={{ margin: '25px 0 30px 0' }}>
          <CardControl 
            title="Afiliaciones"
            completadas={afiliaciones.completed}
            solicitadas={afiliaciones.requested}
            vencidas={afiliaciones.expired}
            rechazadas={afiliaciones.rejected}
            radicadas={afiliaciones.filed}
            total={afiliaciones.total}
            link="/afiliaciones"
          />
        </div>
        
        <div style={{ margin: '25px 0 30px 0' }}>

          <CardControl 
            title="Actualización de datos"
            completadas={actualizaciones.completed}
            solicitadas={actualizaciones.requested}
            vencidas={actualizaciones.expired}
            rechazadas={actualizaciones.rejected}
            radicadas={actualizaciones.filed}
            total={actualizaciones.total}
            link="/actualizacion-datos"
          />
        </div>
        <div style={{ margin: '25px 0 30px 0' }}>
          <CardControl 
            title="Solicitud de crédito"
            completadas={solicitudes.completed}
            solicitadas={solicitudes.requested}
            vencidas={solicitudes.expired}
            rechazadas={solicitudes.rejected}
            radicadas={solicitudes.filed}
            total={solicitudes.total}
            link="/solicitudes-credito"
          />
        </div>
      </section>
    </>
  )
}

export default ControlPanel
