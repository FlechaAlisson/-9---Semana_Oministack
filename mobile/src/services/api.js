/* NAO ESQUECER DE FAZER yarn add axios NA PASTA DO PROEJTO */ 

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.16:3333',
})


export default api