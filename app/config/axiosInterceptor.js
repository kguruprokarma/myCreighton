import axios from 'axios';
import { hashHistory } from 'react-router';
import * as urlConstants from '../constants/urlConstants';
import * as CommonConstants from '../constants/commonConstants';
import { createAndSendLogs } from '../common/utility';


// Request interceptor
axios.interceptors.request.use((confi) => {
  const config = confi;
  config.url = `${config.url}?t=${new Date().getTime()}`;
  config.withCredentials = true;
  return config;
}, (error) => Promise.reject(error));

const sucessCase = (response) => {
  let roleObj = {};
  if (response.data.role.indexOf(CommonConstants.STUDENT_TITLE) > 0) {
    roleObj = { 'userRole': CommonConstants.ROLE_STUDENT };
  }
  if (response.data.role.indexOf(CommonConstants.ROLE_FACULTY_TITLE) >= 0) {
    roleObj = { 'userRole': CommonConstants.ROLE_FACULTY };
  }
  if (response.data.role.indexOf(CommonConstants.ROLE_STAFF_TITLE) >= 0 || response.data.role.indexOf(CommonConstants.GUEST_TITLE) >= 0) {
    roleObj = { 'userRole': CommonConstants.ROLE_STAFF };
  }
  localStorage.setItem('roleInfo', JSON.stringify(roleObj));
};
// Response interceptor
axios.interceptors.response.use((response) => {
  if (response && response.config && response.config.url) {
    const URL = response.config.url;
    if (URL.indexOf('role?t=') !== -1 && response.data && response.data.role) {
      sucessCase(response);
      if (window.location.hash === '#/') {
        hashHistory.replace('/dashboard');
      }
    }
  }
  return response;
}, (error) => {
  console.log(error);
  //createAndSendLogs('error', 'errorblock', 'axios.interceptors', JSON.stringify(error));
  if (error && error.response && error.response.status === 401) {
    const currentUrl = encodeURIComponent(document.URL);
    window.location.href = urlConstants.ADFS_LOGIN_URL + currentUrl;
  } else {
    //Redirect to First time login fix in mozilla 
    const currentUrl = encodeURIComponent(document.URL);
    window.location.href = urlConstants.ADFS_LOGIN_URL + currentUrl;
  }
  return Promise.reject(error);
});
