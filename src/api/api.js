import axios from 'axios';

const dictionary = {
    Completed: 'Completed',
    Submit: 'Submit',
    Requested: 'Requested',
    NotCompleted: 'NotCompleted',
    Confirmed: 'Confirmed'
}

/* axios.defaults.timeout = 3000; */
// Consultamos toda la informacion con respecto a las afiliaciones del servicio de firmas

const getAfiliaciones = async () => {
    const url = 'http://10.2.0.70:81/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393';

    try {
        const response = await axios.post(url)
        
        const newArray = await response.data.object

        const arrayNovelty = sumNovelty(newArray)

        return arrayNovelty

    } catch (error) {
        throw new Error(error)
    }
}

//Consultamos toda la informacion con respecto a las actualizaciones de datos

const getActualizacion = async () => {
    const url = 'http://10.2.0.70:81/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393';

    try {
        const response = await axios.post(url)
        
        const newArray = await response.data.object

        const arrayNovelty = sumNovelty(newArray)

        return arrayNovelty

    } catch (error) {
        throw new Error(error)
    }
}

//Consultamos toda la informacion con respecto a las solicitudes de credito

const getCreditos = async () => {
    
    const url = 'http://10.2.0.70:81/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393';

    try {
        const response = await axios.post(url)
        
        const newArray = await response.data.object

        const arrayNovelty = sumNovelty(newArray)

        return arrayNovelty

    } catch (error) {
        throw new Error(error)
    }
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
        if (element.estadoSolicitud === dictionary.Completed) {
            completed++
        } else if (element.estadoSolicitud === dictionary.Submit) {
            submit++
        } else if (element.estadoSolicitud === dictionary.NotCompleted) {
            notCompleted++
        } else if (element.estadoSolicitud === dictionary.Confirmed) {
            confirmed++
        } else if (element.estadoSolicitud === dictionary.Expired) {
            expired = 0
        } else if (element.estadoSolicitud === dictionary.Requested){
            requested++
        }       
    })

    /* completed = completada
    submit = radicada
    requested = solicitada
    notcompleted = rechazada
    confirmed = confirmadas */

    return {
        NoveltysInfo: noveltys,
        completed,
        requested,
        submit,
        notCompleted,
        expired,
        confirmed,
        total: noveltys.length
    }
}

export {
    getAfiliaciones,
    getActualizacion,
    getCreditos  
}