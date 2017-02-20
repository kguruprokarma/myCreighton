/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data =   {
  "userName": {
    "firstName": "John",
    "middleName": "J",
    "lastName": "Edward",
    "fullName": "John J. Edward"
  },
  "userImageURL": "",
  "userRole": "student"
}
xdescribe('async actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  it('testing action retrival case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + 'student.json', {
      status: 200,
      response:  data
    });
    const expectedActions = [
      { type: types.REQUEST_USER_DETAILS_DATA },
      { type: types.RECEIVE_USER_DETAILS_DATA, data: data}
    ]
    const store = mockStore()

    return store.dispatch(actions.getUserDetailsData('/student'))
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + 'student.json', {
      status: 404,
      responseText:  "error"
    });
    const expectedActions = [
      { type: types.REQUEST_USER_DETAILS_DATA },
      { type: types.RECEIVE_USER_DETAILS_DATA_ERROR, data:"error"}
    ]
    const store = mockStore()

    return store.dispatch(actions.getUserDetailsData('/student'))
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})
