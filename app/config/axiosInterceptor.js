import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
  config.withCredentials = true;
  return config;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => 
    // Do something with response data
   response, (error) => 
    // Do something with response error
   Promise.reject(error));