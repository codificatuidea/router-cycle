import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journal-2e17a-default-rtdb.firebaseio.com'
})

journalApi.interceptors.request.use((config) => {

    // Firebase

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    // Django

    /*config.headers = {
        authorization: `Bearer ${idToken}`
    }*/

    return config

})

export default journalApi