import { createContext, useState } from 'react'
import {  getData, getDataWithDate } from "../api/api"

const NoveltyContext = createContext()

const NoveltyProvider = ({children}) => {

  const [afiliaciones, setAfiliaciones] = useState([])
  const [actualizaciones, setActualizaciones] = useState([])
  const [solicitudes, setSolicitudes] = useState([])
  const [loading, setLoading] = useState(true)


  const getInfo = async () => {
    /* const responseAfiliaciones = await getAfiliaciones()
    const responseActualizaciones = await getActualizacion()
    const responseSolicitudes = await getCreditos()

    setAfiliaciones(responseAfiliaciones)
    setActualizaciones(responseActualizaciones)
    setSolicitudes(responseSolicitudes) */
    const response = await getData()
    setAfiliaciones(response[0])
    setActualizaciones(response[1])
    setSolicitudes(response[2])
    
    setLoading(false)
  }

  const getInfoWithDate = async (date) => {
    setLoading(true)
    const response = await getDataWithDate(date)
    setAfiliaciones(response[0])
    setActualizaciones(response[1])
    setSolicitudes(response[2])

    setLoading(false)
  }

  return (
    <NoveltyContext.Provider value={{
      afiliaciones,
      actualizaciones,
      solicitudes,
      getInfo,
      getInfoWithDate,
      loading
    }}>
      {children}
    </NoveltyContext.Provider>
  )
}

export {
  NoveltyProvider
}

export default NoveltyContext
