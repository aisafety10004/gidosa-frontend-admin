import axios from 'axios';

export const axiosInterceptor = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInterceptor.interceptors.request.use(() =>{});

// axiosInterceptor.interceptors.response.use( () =>  {});
