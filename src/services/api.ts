import axios from 'axios';

/* const api = axios.create({
  baseURL: process.env.BACKEND_URL || 'http://localhost:3000/api/'
}) */

const api = axios.create()

export { api }