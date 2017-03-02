/*Created Date: - 14 -02 -2017
*Usage of file: - This action is used to get login details of a user.*
*/

//import * as types from './actionTypes'


import { hashHistory } from 'react-router';  
import * as _ from 'lodash';
//import cookie from 'react-cookie';  
import loginApi from '../middleware/Login/api';
import { AUTH_USER, AUTH_ERROR } from './actionTypes';

const authiorisedUser=(data) => ({
  type: AUTH_USER,
  data: data
});
const receiveError=(error) => ({
  type: AUTH_ERROR,
  data: error
});
export function loginUser({ email, password }) {  
  return function ( dispatch ) {
    return loginApi.getLoginDetails(email, password)
      .then( (response) => {
        const val = _.find(response.data.userDetails1, { 'email': email });
        if (val !== undefined) {
          localStorage.setItem('roleInfo', JSON.stringify(val));
          dispatch( authiorisedUser( {
            data: val
          } ) );
          hashHistory.replace('/dashboard');
        }
      }
    )
      .catch( (error) => {
        console.log('error: ', error);
        dispatch( receiveError( {
          error: error
        } ) );
      }
    );
  };
}

function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  const errorMessage = error.response ? error.response.data : error;

   // NOT AUTHENTICATED ERROR
//   if (error.status === 401 || error.response.status === 401) {
//     errorMessage = 'You are not authorized to do this.';
//     return dispatch(logoutUser(errorMessage));
//   }

  dispatch({
    type,
    payload: errorMessage
  });
}

/*
let requestData = () => ({
  type: types.REQUEST_AUTHENTICATION_DATA
})

let receiveLoginData = (loginData) => (
  {
    type: types.RECEIVE_AUTHENTICATION_DATA,
    data: loginData
  })

let receiveError = (error) => (
  {
    type: types.RECEIVE_AUTHENTICATION_DATA_ERROR,
    data: error
})

export function changeForm(newState) {
  return { type: types.CHANGE_FORM, newState };
}


export function loginUser({ email, password }) {  
  return function(dispatch) {
    axios.post(`${API_URL}/auth/login`, { email, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = CLIENT_ROOT_URL + '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }

export function authenticateDetails(username, password) {
  return function (dispatch) {
    dispatch(requestData())
    return LoginApi.getLoginDetails(username, password).then((response) => {
        dispatch(receiveLoginData(response))
      }
      )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }))
      }
      )
  }
}

*/
