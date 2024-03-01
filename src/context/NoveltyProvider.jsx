import { createContext, useEffect, useState } from 'react'
import { getActualizacion, getAfiliaciones, getCreditos } from "../api/api"

const NoveltyContext = createContext()

const NoveltyProvider = ({children}) => {

  const [afiliaciones, setAfiliaciones] = useState([])
  const [actualizaciones, setActualizaciones] = useState([])
  const [solicitudes, setSolicitudes] = useState([])


  const getInfo = async () => {
    const responseAfiliaciones = await getAfiliaciones()
    const responseActualizaciones = await getActualizacion()
    const responseSolicitudes = await getCreditos()

    setAfiliaciones(responseAfiliaciones)
    setActualizaciones(responseActualizaciones)
    setSolicitudes(responseSolicitudes)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <NoveltyContext.Provider value={{
      afiliaciones,
      actualizaciones,
      solicitudes
    }}>
      {children}
    </NoveltyContext.Provider>
  )
}

export {
  NoveltyProvider
}

export default NoveltyContext
