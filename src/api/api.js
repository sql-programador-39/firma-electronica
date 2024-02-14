import axios from 'axios';
import { data, data2, data3 } from './data';

const getAfiliaciones = () => {
    const response = data

    let completed = 0
    let requested = 0
    let rejected = 0
    let filed = 0
    let expired = 0

    response.forEach(element => {
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
    });

    return {
        completed,
        requested,
        rejected,
        filed,
        expired,
        total: response.length
    };
}

const getActualizacion = () => {
    const response = data2
    let completed = 0
    let requested = 0
    let rejected = 0
    let filed = 0
    let expired = 0

    response.forEach(element => {
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
    });

    return {
        completed,
        requested,
        rejected,
        filed,
        expired,
        total: response.length
    };
}

const getCreditos = () => {
    const response = data3

    let completed = 0
    let requested = 0
    let rejected = 0
    let filed = 0
    let expired = 0

    response.forEach(element => {
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
    });

    return {
        completed,
        requested,
        rejected,
        filed,
        expired,
        total: response.length
    };

}

export {
    getAfiliaciones,
    getActualizacion,
    getCreditos,
}