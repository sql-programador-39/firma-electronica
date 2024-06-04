import { createContext, useState } from 'react'
import { useAuth } from "react-oidc-context"
import axios from 'axios'

import { getData } from "../api/api"

const NoveltyContext = createContext()

const NoveltyProvider = ({children}) => {

  const [afiliaciones, setAfiliaciones] = useState([])
  const [actualizaciones, setActualizaciones] = useState([])
  const [solicitudes, setSolicitudes] = useState([])
  const [loading, setLoading] = useState(true)
  const [companiesArray, setCompaniesArrays] = useState([])
  const [companyId, setCompanyId] = useState("")
  const dateNow = new Date();
  
  const auth = useAuth()

  // Resta 30 días a la fecha actual para obtener la fecha inicial
  const InitalDate = new Date(dateNow);
  InitalDate.setDate(InitalDate.getDate() - 30);

  // Formatea las fechas en formato YYYY-MM-DD
  const FinalDateFormat = dateNow.toISOString().split('T')[0];
  const InitalDateFormat = InitalDate.toISOString().split('T')[0];

  const [dateF, setDateF] = useState(FinalDateFormat);
  const [dateI, setDateI] = useState(InitalDateFormat);

  const getInfo = async (date, id, token) => {
    setLoading(true)

    const response = await getData(date, id, token)

    setAfiliaciones(response[0])
    setActualizaciones(response[1])
    setSolicitudes(response[2])

    setLoading(false)
  }

  const getCompanies = async () => {
    const url = import.meta.env.VITE_URL + "/api/DsCompany/ObtenerCompanias"

    try {

      const response = await axios(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.user.access_token}`
        }
      })
      setCompaniesArrays(response.data.object)
    } catch (error) {
      if(error.response.status === 401){
        auth.signoutSilent()
        window.location.href = '/Web/'
      }
      throw new Error(error)
    }
  }

  return (
    <NoveltyContext.Provider value={{
      afiliaciones,
      actualizaciones,
      solicitudes,
      getInfo,
      loading,
      setDateF,
      dateF,
      setDateI,
      dateI,
      companyId,
      setCompanyId,
      getCompanies,
      companiesArray,
    }}>
      {children}
    </NoveltyContext.Provider>
  )
}

export {
  NoveltyProvider
}

export default NoveltyContext
