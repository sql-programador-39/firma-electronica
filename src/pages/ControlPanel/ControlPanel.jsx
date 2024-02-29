import { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faCalendarDays } from "@fortawesome/free-solid-svg-icons"

import PieChart from "../../components/PieChart/PieChart"
import BarChart from "../../components/BarsChart/BarChart"
import BarChartSends from "../../components/BarChartSends/BarChartSends"
import CardControl from "../../components/CardControl/CardControl"
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert"
import PieChart2 from "../../components/Skeletons/Skeleton"
import CardSkelenton from "../../components/Skeletons/Skeletons2"
import SkeletonDough from "../../components/Skeletons/SkeletonDough"
import CardSkelenton920 from "../../components/Skeletons/CardSkeleton920"
import CardSkelenton540 from "../../components/Skeletons/CardSkeleton540"

import { getActualizacion, getAfiliaciones, getCreditos } from "../../api/api"
import { validateInitialFinal, validateInitialDate, validateFinalDate } from "../../helpers/datesValidations"

import './ControlPanel.css'
import '../../components/CardControl/CardControl.css'
import '../../components/Skeletons/Skeleton.css'


const ControlPanel = () => {

  const dateNow = new Date();

  // Resta 30 días a la fecha actual para obtener la fecha inicial
  const InitalDate = new Date(dateNow);
  InitalDate.setDate(InitalDate.getDate() - 30);

  // Formatea las fechas en formato YYYY-MM-DD
  const FinalDateFormat = dateNow.toISOString().split('T')[0];
  const InitalDateFormat = InitalDate.toISOString().split('T')[0];

  const [afiliaciones, setAfiliaciones] = useState([])
  const [actualizaciones, setActualizaciones] = useState([])
  const [solicitudes, setSolicitudes] = useState([])
  
  const [company, setCompany] = useState("")
  const [dateF, setDateF] = useState(FinalDateFormat);
  const [dateI, setDateI] = useState(InitalDateFormat);
  
  const [littleAlert, setLittleAlert] = useState({})
  const [skeleton, setSkeleton] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    if(window.innerWidth < 540) {

      setSkeleton('0')
    } else if(window.innerWidth > 540 && window.innerWidth < 920) {

      setSkeleton('1')
    } else {

      setSkeleton('2')
    }

    setTimeout(() => {
      setLoading(false)
    }, 3000)
    
    getInfo()

  }, [])
  

  const getInfo = async () => {
    const responseAfiliaciones = await getAfiliaciones()
    const responseActualizaciones = await getActualizacion()
    const responseSolicitudes = await getCreditos()

    setAfiliaciones(responseAfiliaciones)
    setActualizaciones(responseActualizaciones)
    setSolicitudes(responseSolicitudes) 
  }

  const handleChange = e => {

    const { name, value } = e.target

    switch (name) {
      case 'company':
        setCompany(value)
        break;

      case 'dateI':

        if(!validateInitialFinal(value, dateF)) {
          setLittleAlert({
            msg: 'La fecha inicial no puede ser mayor a la fecha final, por favor selecciona una fecha válida.',
          })
          
          setTimeout(() => {
            setLittleAlert({})
          }, 4000)

          return
        }

        if(validateInitialDate(value, dateF)) {
          setDateI(value)
          setLittleAlert({})
        } else {
          setLittleAlert({
            msg: 'El rango de fecha no puede ser mayor a 30 días, por favor selecciona un rango válido.',
          })
          
          setTimeout(() => {
            setLittleAlert({})
          }, 4000)

          return
        }
        break;

      case 'dateF':
        if(!validateInitialFinal(dateI, value)) {
          setLittleAlert({
            msg: 'La fecha final no puede ser menor a la fecha inicial, por favor selecciona una fecha válida.',
          })
          
          setTimeout(() => {
            setLittleAlert({})
          }, 4000)

          return
        }

        if(validateFinalDate(value)) {
          setDateF(value)
          setLittleAlert({})
        } else {
          setLittleAlert({
            msg: 'La fecha final no puede ser mayor a la fecha del día de hoy, por favor selecciona una fecha válida.',
          })
          
          setTimeout(() => {
            setLittleAlert({})
          }, 5000)

          return
        }
        break;

      default:
        break;
    }
  }

  return (
    <>

      { littleAlert.msg && <ErrorAlert msg={ littleAlert.msg } /> }

        <div className="header-control-panel">
            
            <h1>Panel de control</h1>

            <div>
              <div>
                <FontAwesomeIcon icon={ faCalendarDays } />
                <input 
                  type="date" 
                  className="input-control" 
                  onChange={ handleChange }
                  value={dateI}
                  name="dateI"
                />
                <span>-</span>
                <input 
                  type="date" 
                  className="input-control" 
                  onChange={ handleChange }
                  value={ dateF }
                  name="dateF"  
                />
              </div>

              <div>
                <div>
                  <FontAwesomeIcon icon={ faFilter } />
                  <select 
                    className="input-control" 
                    onChange={ handleChange }
                    value={ company }
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
      { loading ? (
        <>  
          <section className="charts-section">
            <section className="section-chart">
              <PieChart2 />
            </section>

            <section className="section-chart">
              <PieChart2 />
            </section>

            <section className="section-chart">
              <PieChart2 />
            </section>
          </section>

          <section>
            <div style={{ margin: '25px 0 30px 0' }}>
              <h2 style={{ marginBottom: '15px' }}>Afiliaciones</h2>
              <div className="card-skeleton">
                <div className="body-card-skeleton">

                  { skeleton === "0" && <SkeletonDough viewBox="0 0 496 350" radius="40%" /> }
                  { skeleton === "1" && <SkeletonDough viewBox="0 0 496 300" radius="35%" /> }
                  { skeleton === "2" && <SkeletonDough viewBox="0 0 496 400" radius="40%" /> }

                </div>
                <div className="body-card-skeleton">

                  { skeleton === '0' && <CardSkelenton540 /> }
                  { skeleton === '1' && <CardSkelenton920 /> }
                  { skeleton === '2' && <CardSkelenton /> }
                  
                </div>
              </div>
            </div>
            
            <div style={{ margin: '25px 0 30px 0' }}>
            <h2 style={{ marginBottom: '15px' }}>Actualización de datos</h2>
              <div className="card-skeleton">
                <div className="body-card-skeleton">

                  { skeleton === "0" && <SkeletonDough viewBox="0 0 496 350" radius="40%" /> }
                  { skeleton === "1" && <SkeletonDough viewBox="0 0 496 300" radius="35%" /> }
                  { skeleton === "2" && <SkeletonDough viewBox="0 0 496 400" radius="40%" /> }

                </div>
                <div className="body-card-skeleton">

                  { skeleton === '0' && <CardSkelenton540 /> }
                  { skeleton === '1' && <CardSkelenton920 /> }
                  { skeleton === '2' && <CardSkelenton /> }

                </div>
              </div>
            </div>

            <div style={{ margin: '25px 0 30px 0' }}>
            <h2 style={{ marginBottom: '15px' }}>Solicitud de crédito</h2>
              <div className="card-skeleton">
                <div className="body-card-skeleton">

                  { skeleton === "0" && <SkeletonDough viewBox="0 0 496 350" radius="40%" /> }
                  { skeleton === "1" && <SkeletonDough viewBox="0 0 496 300" radius="35%" /> }
                  { skeleton === "2" && <SkeletonDough viewBox="0 0 496 400" radius="40%" /> }

                </div>
                <div className="body-card-skeleton">

                  { skeleton === '0' && <CardSkelenton540 /> }
                  { skeleton === '1' && <CardSkelenton920 /> }
                  { skeleton === '2' && <CardSkelenton /> }

                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="charts-section">
            <div>
              <h2>Distribución documentos firmados</h2>
              <PieChart 
                afiliaciones={ afiliaciones.completed }
                actualizacion={ actualizaciones.completed }
                creditos={ solicitudes.completed }
              />
            </div>

            <div>
              <h2>Solicitudes de firma enviadas</h2>
              <BarChartSends 
                afiliaciones={ afiliaciones.filed }
                actualizacion={ actualizaciones?.filed }
                creditos={ solicitudes?.filed }
              /> 
            </div>

            <div>
              <h2>Estado de solicitudes</h2>
              <BarChart 
                afiliaciones={ [afiliaciones.completed, afiliaciones.requested, afiliaciones.expired, afiliaciones.rejected, afiliaciones.filed] }
                actualizacion={ [actualizaciones.completed, actualizaciones.requested, actualizaciones.expired, actualizaciones.rejected, actualizaciones.filed] }
                creditos={ [solicitudes.completed, solicitudes.requested, solicitudes.expired, solicitudes.rejected, solicitudes.filed] }
              />
            </div>
          </section>

          <section>
            <div style={{ margin: '25px 0 30px 0' }}>
              <CardControl 
                title="Afiliaciones"
                completadas={ afiliaciones.completed }
                solicitadas={ afiliaciones.requested }
                vencidas={ afiliaciones.expired }
                rechazadas={ afiliaciones.rejected }
                radicadas={ afiliaciones.filed }
                total={ afiliaciones.total }
                link="/afiliaciones"
              />
            </div>
            
            <div style={{ margin: '25px 0 30px 0' }}>

              <CardControl 
                title="Actualización de datos"
                completadas={ actualizaciones.completed }
                solicitadas={ actualizaciones.requested }
                vencidas={ actualizaciones.expired }
                rechazadas={ actualizaciones.rejected }
                radicadas={ actualizaciones.filed }
                total={ actualizaciones.total }
                link="/actualizacion-datos"
              />
            </div>
            <div style={{ margin: '25px 0 30px 0' }}>
              <CardControl 
                title="Solicitud de crédito"
                completadas={ solicitudes.completed }
                solicitadas={ solicitudes.requested }
                vencidas={ solicitudes.expired }
                rechazadas={ solicitudes.rejected }
                radicadas={ solicitudes.filed }
                total={ solicitudes.total }
                link="/solicitudes-credito"
              />
            </div>
          </section>
        </>
      ) }
    </>
  )
}

export default ControlPanel
