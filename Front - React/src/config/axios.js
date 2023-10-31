import axios from 'axios'

const instance = axios.create({baseURL:"http://localhost:8081", });
const token = localStorage.getItem('token');

console.log('Token:', token);

// instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcwMTMxMjExMn0.vr7-4mT7JxIHHthhXqIVh_4Vgo0cwGly0j1YNQcYyBg';
instance.defaults.headers.common['Authorization'] = token;
export default instance