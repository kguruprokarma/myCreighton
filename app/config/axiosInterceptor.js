import axios from 'axios';
import { hashHistory } from 'react-router';  
import { indexOf } from 'lodash';
import * as urlConstants from '../constants/urlConstants';
import * as CommonConstants from '../constants/commonConstants';


// Request interceptor
axios.interceptors.request.use((confi) => {
  const config =confi;
  const URL = config.url.split('/');
  if (indexOf(URL, 'logoutadfs') < 0) {
    config.withCredentials = true;
  }
  return config;
}, (error) => Promise.reject(error));

// Response interceptor
axios.interceptors.response.use((response) => {
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
      if (response.data.role.indexOf(CommonConstants.ROLE_STAFF_TITLE) >= 0 || response.data.role.indexOf(CommonConstants.GUEST_TITLE) >= 0) {
        roleObj = {'userRole': CommonConstants.ROLE_STAFF};
      }
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
  console.log(error);
  if (error.response.status === 401) {
    const currentUrl = encodeURIComponent(document.URL);
    window.location = urlConstants.ADFS_LOGIN_URL + currentUrl;
  }
  return Promise.reject(error);
});