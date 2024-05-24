import axios from 'axios';

const dictionary = {
    Completed: 'Completada',
    Submit: 'Radicada',
    Requested: 'Solicitada',
    NotCompleted: 'No Completada',
    Confirmed: 'Confirmada',
    Expired: 'Vencida'
}

// Consultamos toda la informacion con respecto a las afiliaciones del servicio de firmas

const getData = async (date, id, token) => {

   const url = import.meta.env.VITE_URL + "/api/DigitalSignatureReport/ObtenerReporteConsolidado"

    try {
        
        const response = await axios.post(url, {
            "companyId": id,
            "startDate": date['dateI'],
            "endDate": date['dateF'],
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const data = response.data

        const array2 = noveltysCounter(data)
        const arrayAfiliations = sumNovelty(array2.afiliations)
        const arrayDataUpdates = sumNovelty(array2.dataUpdates)
        const arrayCreditRequests = sumNovelty(array2.creditRequests)

        return [arrayAfiliations, arrayDataUpdates, arrayCreditRequests]
    
    } catch (error) {
        throw new Error(error)
    }
}

const noveltysCounter = (noveltys) => {
    
    if(noveltys === undefined) return
    let afiliations = []
    let dataUpdates = []
    let creditRequests = []

    noveltys.object.forEach(novelty => {
        if (novelty.TipoSolicitud === 'Afiliación') {
            afiliations.push(novelty)
        } else if (novelty.TipoSolicitud === 'Actualización de datos') {
            dataUpdates.push(novelty)
        } else if (novelty.TipoSolicitud === 'SolicitudCreditos') {
            creditRequests.push(novelty)
        }
    })

    const totalNoveltys = {
        afiliations: afiliations,
        dataUpdates: dataUpdates,
        creditRequests: creditRequests
    }

    return totalNoveltys
}

//Sumamos la cantidad de solicitudes por estado para poder obtener el total y mostrarlo en el panel de control

const sumNovelty = (noveltys) => {

    if(noveltys === undefined) return

    let completed = 0
    let submit = 0
    let requested = 0
    let notCompleted = 0
    let confirmed = 0
    let expired = 0


    noveltys.forEach(element => {
        if (element.Estado === dictionary.Completed) {
            completed++
        } else if (element.Estado === dictionary.Submit) {
            submit++
        } else if (element.Estado === dictionary.NotCompleted) {
            notCompleted++
        } else if (element.Estado === dictionary.Confirmed) {
            confirmed++
        } else if (element.Estado === dictionary.Expired) {
            expired = 0
        } else if (element.Estado === dictionary.Requested){
            requested++
        }       
    })

    const totalStatus = {
        completed,
        submit,
        requested,
        notCompleted,
        confirmed,
        expired,
        total: noveltys.length
    }

    return totalStatus
}

export {
    getData,
}