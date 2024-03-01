import axios from 'axios';

const getAfiliaciones = async () => {
    const url = '../../db.json';

    try {
        const response = await axios(url)
        
        const arrayAfiliaciones = response.data

        const arrayNovelty = sumNovelty(arrayAfiliaciones)

        return arrayNovelty

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

const getActualizacion = async () => {
    const url = '../../db.json';

    try {
        const response = await axios(url)
        
        const arrayActualizaciones = response.data

        const arrayNovelty = sumNovelty(arrayActualizaciones)

        return arrayNovelty

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

const getCreditos = async () => {
    
    const url = '../../db.json';

    try {
        const response = await axios(url)
        
        const arraySolicitudes = response.data

        const arrayNovelty = sumNovelty(arraySolicitudes)

        return arrayNovelty

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

const sumNovelty = (noveltys) => {
    let completed = 0
    let requested = 0
    let rejected = 0
    let filed = 0
    let expired = 0

    
    for(let p = 0, len = noveltys.length; p < len; p++) {
        if (noveltys[p].estado === 'Completada') {
            completed++
        } else if (noveltys[p].estado === 'Solicitada') {
            requested++
        } else if (noveltys[p].estado === 'Rechazada') {
            rejected++
        } else if (noveltys[p].estado === 'Radicada') {
            filed++
        } else if (noveltys[p].estado === 'Vencida') {
            expired++
        }
    }

    /* noveltys.forEach(element => {
        console.log(element);
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
    }) */

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