import { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faCalendarDays, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

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

import useNovelty from "../../hooks/useNovelty"

import { useAuth } from "react-oidc-context"

import { validateInitialFinal, validateInitialDate, validateFinalDate } from "../../helpers/datesValidations"

import './ControlPanel.css'
import '../../components/CardControl/CardControl.css'
import '../../components/Skeletons/Skeleton.css'


const ControlPanel = () => {

  const { 
    afiliaciones, 
    actualizaciones, 
    solicitudes, 
    loading, 
    setDateF, dateF,
    setDateI, dateI,
    setCompanyId, companyId,
    companiesArray,
    getCompanies,
    getInfo
  } = useNovelty()

  const auth = useAuth()
  
  const [littleAlert, setLittleAlert] = useState({})
  const [skeleton, setSkeleton] = useState('')

  useEffect(() => {

    if(window.innerWidth < 540) {
      setSkeleton('0')
    } else if(window.innerWidth > 540 && window.innerWidth < 920) {
      setSkeleton('1')
    } else {
      setSkeleton('2')
    }
    
    getCompanies()
    getInfo({ dateI, dateF }, "1a1af3d7-c892-4e80-8225-4a1d5fa1e417", auth.user.access_token)
    
  }, [])
  

  const handleClick = async () => {

    if(!validateInitialFinal(dateI, dateF)) {
      setLittleAlert({
        msg: 'La fecha inicial no puede ser mayor a la fecha final, por favor selecciona una fecha válida.',
      })
      
      setTimeout(() => {
        setLittleAlert({})
      }, 4000)

      return
    }

    if(!validateInitialDate(dateI, dateF)) {
      setLittleAlert({
        msg: 'El rango de fecha no puede ser mayor a 30 días, por favor selecciona un rango válido.',
      })
      
      setTimeout(() => {
        setLittleAlert({})
      }, 4000)

      return
    }

    if(!validateFinalDate(dateF)) {
      setLittleAlert({
        msg: 'La fecha final no puede ser mayor a la fecha del día de hoy, por favor selecciona una fecha válida.',
      })

      setTimeout(() => {
        setLittleAlert({})
      }, 4000)

      return
    }

    try {
      getInfo({ dateI, dateF }, "1a1af3d7-c892-4e80-8225-4a1d5fa1e417", auth.user.access_token)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <>
      { littleAlert.msg && <ErrorAlert msg={ littleAlert.msg } /> }

      <div className="header-control-panel"> 
        <h1>Panel de control</h1>

        <div>
          <div>
            <div className="div-date">
              <FontAwesomeIcon icon={ faCalendarDays } />
            </div>
            <input 
              type="date" 
              className="input-control" 
              value={ dateI }
              onChange={ e => setDateI(e.target.value) }
              name="dateI"
            />
            <span>-</span>
            <input 
              type="date" 
              className="input-control" 
              value={ dateF }
              onChange={ e => setDateF(e.target.value) }
              name="dateF"
            />

            <button className="button-search" onClick={ handleClick }><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>

          <div>
            <div >
              <div className="div-company">
                <FontAwesomeIcon icon={ faFilter } />
              </div>
              <select 
                className="input-control"
                onChange={ e => setCompanyId(e.target.value) }
                value={ companyId }
                name="company"
                >
                <option value=""> --Selecciona-- </option>
                {
                  companiesArray.length > 0 && companiesArray.map(item => (
                    <option key={ item.companyCode } value={ item.companyCode }>{ item.companyName }</option>
                  ))
                }
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
                afiliaciones={ afiliaciones.requested }
                actualizacion={ actualizaciones?.requested }
                creditos={ solicitudes?.requested }
              /> 
            </div>

            <div>
              <h2>Estado de solicitudes</h2>
              <BarChart 
                afiliaciones={ [afiliaciones.completed, afiliaciones.requested, afiliaciones.expired, afiliaciones.notCompleted, afiliaciones.submit, afiliaciones.confirmed] }
                actualizacion={ [actualizaciones.completed, actualizaciones.requested, actualizaciones.expired, actualizaciones.notCompleted, actualizaciones.submit, actualizaciones.confirmed] }
                creditos={ [solicitudes.completed, solicitudes.requested, solicitudes.expired, solicitudes.notCompleted, solicitudes.submit, solicitudes.confirmed] }
              />
            </div>
          </section>

          <section>
            <div style={{ margin: '25px 0 30px 0' }}>
              <CardControl 
                title="Afiliaciones"
                completed={ afiliaciones.completed }
                requested={ afiliaciones.requested }
                expired={ afiliaciones.expired }
                notCompleted={ afiliaciones.notCompleted }
                submit={ afiliaciones.submit }
                confirmed={ afiliaciones.confirmed }
                total={ afiliaciones.total }
                link="/afiliaciones"
              />
            </div>
            
            <div style={{ margin: '25px 0 30px 0' }}>

              <CardControl 
                title="Actualización de datos"
                completed={ actualizaciones.completed }
                requested={ actualizaciones.requested }
                expired={ actualizaciones.expired }
                notCompleted={ actualizaciones.notCompleted }
                submit={ actualizaciones.submit }
                confirmed={ actualizaciones.confirmed }
                total={ actualizaciones.total }
                link="/actualizacion-datos"
              />
            </div>
            <div style={{ margin: '25px 0 30px 0' }}>

              <CardControl 
                title="Solicitud de crédito"
                completed={ solicitudes.completed }
                requested={ solicitudes.requested }
                expired={ solicitudes.expired }
                notCompleted={ solicitudes.notCompleted }
                submit={ solicitudes.submit }
                confirmed={ solicitudes.confirmed }
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
