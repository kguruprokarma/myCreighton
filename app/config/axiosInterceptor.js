import axios from 'axios';
import { hashHistory } from 'react-router';  
import { indexOf } from 'lodash';
import * as urlConstants from '../constants/urlConstants';
import * as CommonConstants from '../constants/commonConstants';


// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  const URL = config.url.split('/');
  if (indexOf(URL, 'logoutadfs') < 0) {
    config.withCredentials = true;
  }
  return config;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  console.log(response);
  if (response && response.config && response.config.url) {
    const URL = response.config.url.split('/');
    let roleObj = {};
    if (indexOf(URL, 'role') > 0 && response.data && response.data.role) {
      if (response.data.role.indexOf(CommonConstants.STUDENT_TITLE)>0) {
        roleObj = {'userRole': CommonConstants.ROLE_STUDENT};
      }
      if (response.data.role.indexOf(CommonConstants.ROLE_FACULTY_TITLE) >= 0) {
        roleObj = {'userRole': CommonConstants.ROLE_FACULTY};
      }
      if (response.data.role.indexOf(CommonConstants.ROLE_STAFF_TITLE) >= 0) {
        roleObj = {'userRole': CommonConstants.ROLE_STAFF};
      }
      // For Guest user
      // if (response.data.role.indexOf(CommonConstants.ROLE_STAFF_TITLE) >= 0 || response.data.role.indexOf('Guest') >= 0) {
      //   roleObj = {'userRole': CommonConstants.ROLE_STAFF};
      // }
      localStorage.setItem('roleInfo', JSON.stringify(roleObj));
      if (window.location.hash === '#/') {
        hashHistory.replace('/dashboard');
      }
    } else if (indexOf(URL, 'logoutadfs') > 0) {
      const currentUrl = encodeURIComponent(document.URL);
      window.location = urlConstants.ADFS_LOGIN_URL + currentUrl;
    }
  }
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