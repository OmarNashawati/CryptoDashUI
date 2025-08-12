import axios from 'axios'
const apiKey = import.meta.env.VITE_API_KEY_2
const apiBase = import.meta.env.VITE_API_URL_2

const api = axios.create({
  baseURL: apiBase,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  timeout: 10000,
})

/*
api.interceptors.request.use(
  (config) => {
    // Example: Add token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
*/

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle API errors globally
    if (error.response?.state === 401) {
      // Example: Redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
