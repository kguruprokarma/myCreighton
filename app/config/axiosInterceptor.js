import axios from 'axios';
import * as urlConstants from '../constants/urlConstants';

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
  config.withCredentials = true;
  return config;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
  console.log(response);
  return response;
}, (error) => {
    // Do something with response error
  console.log(error);
  if (error.response.status === 401) {
    const currentUrl = encodeURIComponent(document.URL);
    window.location = urlConstants.ADFS_LOGIN_URL + currentUrl;
  }
  return Promise.reject(error);
});