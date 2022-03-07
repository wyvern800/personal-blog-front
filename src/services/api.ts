import axios from 'axios';

// Creates the connection
const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;
