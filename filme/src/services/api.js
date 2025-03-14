//url da api
//https://api.themoviedb.org/3/
//movie/550?api_key=a18a625e4df65439d281a6a963f9e4fb

import axios from 'axios'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api
