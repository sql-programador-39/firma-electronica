import { createContext, useState } from 'react'
import {  getData } from "../api/api"

const NoveltyContext = createContext()

const NoveltyProvider = ({children}) => {

  const [afiliaciones, setAfiliaciones] = useState([])
  const [actualizaciones, setActualizaciones] = useState([])
  const [solicitudes, setSolicitudes] = useState([])
  const [loading, setLoading] = useState(true)

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


  const getInfo = async (date) => {
    setLoading(true)
    const response = await getData(date)
    setAfiliaciones(response[0])
    setActualizaciones(response[1])
    setSolicitudes(response[2])

    setLoading(false)
  }

  /* const getInfoWithDate = async (date) => {
    setLoading(true)
    const response = await getDataWithDate(date)
    setAfiliaciones(response[0])
    setActualizaciones(response[1])
    setSolicitudes(response[2])

    setLoading(false)
  } */

  return (
    <NoveltyContext.Provider value={{
      afiliaciones,
      actualizaciones,
      solicitudes,
      getInfo,
      /* getInfoWithDate, */
      loading,
      setDateF,
      dateF,
      setDateI,
      dateI,
      company,
      setCompany
    }}>
      {children}
    </NoveltyContext.Provider>
  )
}

export {
  NoveltyProvider
}

export default NoveltyContext
