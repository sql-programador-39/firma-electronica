import axios from 'axios';

const dictionary = {
    Completed: 'Completed',
    Submit: 'Submit',
    Requested: 'Requested',
    NotCompleted: 'NotCompleted',
    Confirmed: 'Confirmed'
}

axios.defaults.timeout = 3000;
// Consultamos toda la informacion con respecto a las afiliaciones del servicio de firmas


const getData = async (date) => {

    const url = `http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&StartDate=${date['dateI']}&EndDate=${date['dateF']}&ReportType=Affiliation`
    const url2 = `http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&StartDate=${date['dateI']}&EndDate=${date['dateF']}&ReportType=DataUpdate`
    const url3 = `http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&StartDate=${date['dateI']}&EndDate=${date['dateF']}&ReportType=CreditRequest`
/*     const url = 'http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&ReportType=Affiliation';
    const url2 = 'http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&ReportType=DataUpdate';
    const url3 = 'http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&ReportType=CreditRequest'; */

    try {
        const [response, response2, response3] = await Promise.all([ axios.post(url), axios.post(url2), axios.post(url3) ])
        
        const [data, data2, data3] = await Promise.all([response.data, response2.data, response3.data])
    
        const [arrayNovelty, arrayNovelty2, arrayNovelty3] = await Promise.all([sumNovelty(data), sumNovelty(data2), sumNovelty(data3)])
    
        return [arrayNovelty, arrayNovelty2, arrayNovelty3]
    
    } catch (error) {
        throw new Error(error)
    }
}

/* const getDataWithDate = async (date) => {

    console.log(date['dateI'], date['dateF']);

    const url = `http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&StartDate=${date['dateI']}&EndDate=${date['dateF']}&ReportType=Affiliation`
    const url2 = `http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&StartDate=${date['dateI']}&EndDate=${date['dateF']}&ReportType=DataUpdate`
    const url3 = `http://10.1.0.133:1000/api/DigitalSignatureReport/ObtenerReporteTipoOperacion?CompanyId=E8FCFE70-7121-4414-9C28-188925029393&StartDate=${date['dateI']}&EndDate=${date['dateF']}&ReportType=CreditRequest`

    try {
        const [response, response2, response3] = await Promise.all([ axios.post(url), axios.post(url2), axios.post(url3) ])

        const [data, data2, data3] = await Promise.all([response.data, response2.data, response3.data])

        const [arrayNovelty, arrayNovelty2, arrayNovelty3] = await Promise.all([sumNovelty(data), sumNovelty(data2), sumNovelty(data3)])
        
        return [arrayNovelty, arrayNovelty2, arrayNovelty3]
    } catch (error) {
        throw new Error(error)
    }
} */

//Sumamos la cantidad de solicitudes por estado para poder obtener el total y mostrarlo en el panel de control

const sumNovelty = (noveltys) => {

    if(noveltys === undefined) return

    let completed = 0
    let submit = 0
    let requested = 0
    let notCompleted = 0
    let confirmed = 0
    let expired = 0


    noveltys.object.forEach(element => {
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
        total: noveltys.object.length
    }
}

export {
    getData,
    /* getDataWithDate */
}