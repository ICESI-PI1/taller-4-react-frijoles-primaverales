import axios from 'axios'

const instance = axios.create({baseURL:"http://localhost:8081", })
const token = localStorage.getItem('token');

console.log('Token:', token);

instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;

export default instance