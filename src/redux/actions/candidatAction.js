import axios from 'axios';

const API = axios.create({
  
    baseURL: 'http://51.68.91.24:3000/Condidat/api'
})

export default API;