import axios from 'axios';

// Consultamos toda la informacion con respecto a las afiliaciones del servicio de firmas

const getAfiliaciones = async () => {
    const url = '../../db.json';

    try {
        const response = await axios(url)
        
        const newArray = response.data

        const arrayNovelty = sumNovelty(newArray)

        return arrayNovelty

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

//Consultamos toda la informacion con respecto a las actualizaciones de datos

const getActualizacion = async () => {
    const url = '../../db.json';

    try {
        const response = await axios(url)
        
        const newArray = response.data

        const arrayNovelty = sumNovelty(newArray)

        return arrayNovelty

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

//Consultamos toda la informacion con respecto a las solicitudes de credito

const getCreditos = async () => {
    
    const url = '../../db.json';

    try {
        const response = await axios(url)
        
        const newArray = response.data

        const arrayNovelty = sumNovelty(newArray)

        return arrayNovelty

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

//Sumamos la cantidad de solicitudes por estado para poder obtener el total y mostrarlo en el panel de control

const sumNovelty = async (noveltys) => {

    if(noveltys === undefined) return


    let completed = 0
    let requested = 0
    let rejected = 0
    let filed = 0
    let expired = 0

    await noveltys.forEach(element => {
        if (element.estado === 'Completada') {
            completed++
        } else if (element.estado === 'Solicitada') {
            requested++
        } else if (element.estado === 'Rechazada') {
            rejected++
        } else if (element.estado === 'Radicada') {
            filed++
        } else if (element.estado === 'Vencida') {
            expired++
        }        
    })

    return {
        NoveltysInfo: noveltys,
        completed,
        requested,
        rejected,
        filed,
        expired,
        total: noveltys.length
    }
}

export {
    getAfiliaciones,
    getActualizacion,
    getCreditos  
}