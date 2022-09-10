import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journal-2e17a-default-rtdb.firebaseio.com'
})

export default journalApi