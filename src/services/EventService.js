import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    console.log('chegou no service')
    return apiClient.get('/events')
  },
  //Added new call
  getEvent(id) {
    console.log('chegou no evento', id)
    return apiClient.get('/events/' + id)
  }
}