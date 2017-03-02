import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../../constants/urlConstants';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
  "timing": "-25.747",
  "data": [
    {
      "netid": "5de48407ab",
      "advisor": {
        "first_name": "6410ef0d3a",
        "last_name": "64e6167034",
        "middle_name": "M"
      },
      "major_code": "HCE",
      "major_desc": "",
      "minor": "",
      "student_pidm": "3453277"
    }
  ]
};
describe('async actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
   let userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = '2775739283';
  it('testing action retrival case', () => {
    moxios.stubRequest(urlConstants.API_GATEWAY + urlConstants.STUDENT_ACADEMIC + urlConstants.STUDENT_ACADEMIC_SINGLE + '?primaryKey=netid&primaryValue=2775739283', {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_ACADEMIC_DATA },
      { type: types.RECEIVE_ACADEMIC_DATA, data: data }
    ]
    const store = mockStore()

    return store.dispatch(actions.getAcademicData(userReqObj))
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure case', () => {
    moxios.stubRequest(urlConstants.API_GATEWAY + urlConstants.STUDENT_ACADEMIC + urlConstants.STUDENT_ACADEMIC_SINGLE + '?primaryKey=netid&primaryValue=2775739283', {
      status: 404,
      responseText: "error"
    });
    const expectedActions = [
      { type: types.REQUEST_ACADEMIC_DATA },
      { type: types.RECEIVE_ACADEMIC_DATA_ERROR, data: "error" }
    ]
    const store = mockStore()

    return store.dispatch(actions.getAcademicData(userReqObj))
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})