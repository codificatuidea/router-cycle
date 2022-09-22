import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBJmb7ZsXGox3bXxPP5-B2rsCUw4rwWciE'
    }
})

export default authApi