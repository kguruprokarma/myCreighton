/*Created Date: - 30 -01 -2017
*Usage of file: - This script is for unit test for actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const studentData = {
  "timing": "-18.934",
  "data": [
    {
      "netid": "bab74e76ba",
      "birth_date": "1988-06-06",
      "email": { "school_email": "bab74e76ba@creighton.edu" },
      "emergency_contact": { "first_name": null, "last_name": null, "middle_name": null },
      "guardian": { "first_name": null, "last_name": null, "middle_name": null },
      "home_address": null,
      "legal_name": { "first_name": "3f0c9b03e8", "last_name": "e5eb1d7455", "middle_name": "R" },
      "parent": { "first_name": null, "last_name": null, "middle_name": null },
      "pidm": "3268947",
      "primary_phone_no": null,
      "school_address": null
    }
  ]
}

const staffProfileData = {
  "timing": "-18.934",
  "data": [
    {
      "netid": "bab74e76ba",
      "birth_date": "1988-06-06",
      "email": { "school_email": "bab74e76ba@creighton.edu" },
      "emergency_contact": { "first_name": null, "last_name": null, "middle_name": null },
      "guardian": { "first_name": null, "last_name": null, "middle_name": null },
      "home_address": null,
      "legal_name": { "first_name": "3f0c9b03e8", "last_name": "e5eb1d7455", "middle_name": "R" },
      "parent": { "first_name": null, "last_name": null, "middle_name": null },
      "pidm": "3268947",
      "primary_phone_no": null,
      "school_address": null
    }
  ]
}
describe('async actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  it('testing action for profile data for student retrival case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.PROFILE_DATA, {
      status: 200,
      response: studentData
    });
    const expectedActions = [
      { type: types.REQUEST_STUDENT_PROFILE_DATA },
      { type: types.RECEIVE_STUDENT_PROFILE_DATA, data: studentData }
    ]
    const store = mockStore()

    return store.dispatch(actions.getStudentProfileData())
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure for student profile case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.PROFILE_DATA, {
      status: 404,
      responseText: "error"
    });
    const expectedActions = [
      { type: types.REQUEST_STUDENT_PROFILE_DATA },
      { type: types.RECEIVE_STUDENT_DATA_ERROR, data: "error" }
    ]
    const store = mockStore()

    return store.dispatch(actions.getStudentProfileData())
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });


  it('testing action for profile data for staff retrival case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.STAFF_PROFILE_DATA, {
      status: 200,
      response: staffProfileData
    });
    const expectedActions = [
      { type: types.REQUEST_STAFF_PROFILE_DATA },
      { type: types.RECEIVE_STAFF_PROFILE_DATA, data: staffProfileData }
    ]
    const store = mockStore()

    return store.dispatch(actions.getStaffProfileData())
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure for staff profile case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.STAFF_PROFILE_DATA, {
      status: 404,
      responseText: "error"
    });
    const expectedActions = [
      { type: types.REQUEST_STAFF_PROFILE_DATA },
      { type: types.RECEIVE_STAFF_DATA_ERROR, data: "error" }
    ]
    const store = mockStore()

    return store.dispatch(actions.getStaffProfileData())
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})
