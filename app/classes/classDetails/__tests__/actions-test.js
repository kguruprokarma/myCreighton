import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data = [{
  "id": 1,
  "classHeader": {
    "name": "English 112",
    "time": "11am-12pm",
    "by": "Miller",
    "place": "Building Rm 119",
    "on": "poetry",
    "date": "jan 27",
    "recurrence": "Fri"
  },
  "assignmentsDue": [
    "Read chapter 15",
    "Lab results hand in class"
  ],
  "todaysClass": [
    "Chapter 15 - photosynthesis reaction",
    "Prep for quiz"
  ],
  "upcomingAssignments": [
    {
      "date": "Jan26",
      "assignment": "Study guide chapters 14-15"
    },
    {
      "date": "Feb 7",
      "assignment": "Mid-term paper Krebs cycle"
    }
  ],
  "testsOrQuizzes": [
    {
      "date": "Jan 31",
      "assignment": "Quiz chapters 14-15"
    },
    {
      "date": "Feb 16",
      "assignment": "Lab exams"
    }
  ]
}];
describe('CLass details async actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  it('testing action retrival case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.CLASS_DETAILS_DATA, {
      status: 200,
      response:  data
    });
    const expectedActions = [
      { type: types.REQUEST_CLASS_DETAILS_DATA },
      { type: types.RECEIVE_CLASS_DETAILS_DATA, data: data}
    ]
    const store = mockStore()

    return store.dispatch(actions.getClassDetails())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.CLASS_DETAILS_DATA, {
      status: 404,
      responseText:  "error"
    });
    const expectedActions = [
      { type: types.REQUEST_CLASS_DETAILS_DATA },
      { type: types.RECEIVE_CLASS_DETAILS_ERROR, data:"error"}
    ]
    const store = mockStore()

    return store.dispatch(actions.getClassDetails())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})