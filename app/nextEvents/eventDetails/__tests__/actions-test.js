/* Created on 21st, Feb 2017
 * Test cases for actions in next events
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const data = [  {
    "eventId": 243,
    "classes": {
      "title": "English 112",
      "sub_title": "Next events English 112",
      "location": "Building Rm 119",
      "next_class_start_date": "feb 22",
      "next_class_start_time": "3pm - 4pm",
      "test": false,
      "quizzes": true
    },
    "assignments": {
      "title": "English 112",
      "class": "English 112",
      "due_date": "feb 22",
      "details": "Assignments"
    },
    "quizzes": {
      "title": "English 112",
      "class": "English 112",
      "date": "feb 22",
      "time": "4pm - 5pm",
      "description": "Quizzes",
      "points": 10,
      "no_of_question": 20
    },
    "outlook": {
      "title": "English 112",
      "date": "feb 23",
      "startTime": "2pm",
      "endTime": "3pm",
      "organizer": "university",
      "location": "Building Rm 119",
      "description": "outlook details"
    }
  }];
describe('Next Events Student actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  
  xit('Succes test case for next events', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.EVENT_DETAILS, {
      status: 200,
      response:  data
    });
    const expectedActions = [
      { type: types.REQUEST_EVENT_CLASS_DETAILS_DATA },
      { type: types.RECEIVE_EVENT_CLASS_DETAILS_DATA, data: data}
    ]
    const store = mockStore()

    return store.dispatch(actions.getEventClassDetails())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  xit('failure test case for next events', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.EVENT_DETAILS, {
      status: 404,
      responseText:  "error"
    });
    const expectedActions = [
      { type: types.REQUEST_EVENT_CLASS_DETAILS_DATA },
      { type: types.RECEIVE_EVENT_CLASS_DETAILS_DATA_ERROR, data:"error"}
    ]
    const store = mockStore()

    return store.dispatch(actions.getEventClassDetails())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})