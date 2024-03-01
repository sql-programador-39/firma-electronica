import axios from 'axios';

const getAfiliaciones = async () => {
    const url = '../../db.json';

    try {
        /* const response = await axios.get(url)
        
        const arrayAfiliaciones = response.data

        const arrayNovelty = sumNovelty(arrayAfiliaciones)

        return arrayNovelty */
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
      
          // Aquí puedes hacer lo que necesites con los datos, como pasarlos a sumNovelty
          let completed = 0
          let requested = 0
          let rejected = 0
          let filed = 0
          let expired = 0
    
          data.forEach(element => {
            //console.log(element);
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
            NoveltysInfo: data,
            completed,
            requested,
            rejected,
            filed,
            expired,
            total: data.length
        }

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

const getActualizacion = async () => {
    const url = '../../db.json';

    try {
        /* const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
      
          // Aquí puedes hacer lo que necesites con los datos, como pasarlos a sumNovelty
          const arrayNovelty = sumNovelty(data);
      
          return arrayNovelty; */


          const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
      
          // Aquí puedes hacer lo que necesites con los datos, como pasarlos a sumNovelty
          let completed = 0
          let requested = 0
          let rejected = 0
          let filed = 0
          let expired = 0
    
          data.forEach(element => {
            //console.log(element);
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
            NoveltysInfo: data,
            completed,
            requested,
            rejected,
            filed,
            expired,
            total: data.length
        }
    } catch (error) {
        console.error('Error fetching data', error)
    }
}

const getCreditos = async () => {
    
    const url = '../../db.json';

    try {
        /* const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
      
          // Aquí puedes hacer lo que necesites con los datos, como pasarlos a sumNovelty
          const arrayNovelty = sumNovelty(data);
      
          return arrayNovelty; */

          const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
      
          // Aquí puedes hacer lo que necesites con los datos, como pasarlos a sumNovelty
          let completed = 0
          let requested = 0
          let rejected = 0
          let filed = 0
          let expired = 0
    
          data.forEach(element => {
            //console.log(element);
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
            NoveltysInfo: data,
            completed,
            requested,
            rejected,
            filed,
            expired,
            total: data.length
        }

    } catch (error) {
        console.error('Error fetching data', error)
    }
}

/* const sumNovelty = async (noveltys) => {
    if(noveltys === undefined) return


    let completed = 0
    let requested = 0
    let rejected = 0
    let filed = 0
    let expired = 0

    await noveltys.forEach(element => {
        //console.log(element);
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
} */

export {
    getAfiliaciones,
    getActualizacion,
    getCreditos  
}