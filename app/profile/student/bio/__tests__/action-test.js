/*Created Date: - 30 -01 -2017
*Usage of file: - This script is for unit test for actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../../constants/urlConstants';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data =  {
                "studentProfile": {
                      "bioData": {
                          "legalName": {
                              "first": "John",
                              "middle": "J",
                              "last": "Edward"
                          },
                          "address": {
                              "home": {
                                  "street1": "12345 Nicolas St",
                                  "street2": "21st",
                                  "city": "Omaha",
                                  "state": "Nebraska",
                                  "postalCode": "68154-1234"
                              },
                              "school": {
                                  "street1": "2112 California St",
                                  "street2": "22nd",
                                  "city": "Omaha",
                                  "state": "Nebraska",
                                  "postalCode": "68179"
                              }
                          },
                          "contactDetail": {
                              "primaryPhone": "402.334.0477",
                              "emergencyContact": {
                                  "name": {
                                      "first": "Mary",
                                      "middle": "J",
                                      "last": "Edward"
                                  },
                                  "phone": "402.333.5671",
                                  "relation": "Mother"
                              },
                              "email": {
                                  "school": {
                                      "value": "12345678g@creighton.edu"
                                  }, 
                                  "personal": {
                                      "value": "bluejfan2019@yahoo.com"
                                  }
                              },
                              "birthDate": "May 5, 1997",
                              "netID": "bbb12345",
                              "relationDetail": {
                                 "parent": {
                                  "firstName": "Terrance",
                                  "middleName": "B",
                                  "lastName": "Edward"
                              },
                              "guardian": {
                                  "firstName": "Adam",
                                  "middleName": "J",
                                  "lastName": "Edwards"
                              }
                          }
                          }
                      }
                  }
              }
describe('async actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  it('testing action retrival case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.PROFILE_DATA, {
      status: 200,
      response:  data
    });
    const expectedActions = [
      { type: types.REQUEST_STUDENT_PROFILE_DATA },
      { type: types.RECEIVE_STUDENT_PROFILE_DATA, data: data}
    ]
    const store = mockStore()

    return store.dispatch(actions.getStudentProfileData())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.PROFILE_DATA, {
      status: 404,
      responseText:  "error"
    });
    const expectedActions = [
      { type: types.REQUEST_STUDENT_PROFILE_DATA },
      { type: types.RECEIVE_STUDENT_DATA_ERROR, data:"error"}
    ]
    const store = mockStore()

    return store.dispatch(actions.getStudentProfileData())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})
