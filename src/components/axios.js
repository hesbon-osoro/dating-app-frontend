import axios from 'axios'
const instance = axios.create({
    // development mode
    // baseURL: 'http://localhost:8001'

    // production mode
    baseURL: 'https://dating-mern-backnd.herokuapp.com'
})
export default instance