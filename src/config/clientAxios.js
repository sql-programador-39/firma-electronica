import axios from 'axios';


const clientAxios = axios.create({
  baseURL: `${import.meta.env.REACT_APP_BACKEND_URL}/api`
});

export default clientAxios;