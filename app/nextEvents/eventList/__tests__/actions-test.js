import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
  'classes': [
    {
      'className': 'English 112',
      'meetingLocation': 'Building Rm 119',
      'startTime': '1:00 p.m.',
      'endTime': '2:00 p.m.',
      'dateofOccurrence': 'Fri'
    },
    {
      'className': 'Chemistry 105',
      'meetingLocation': 'Building Rm 119',
      'startTime': '1:00 p.m.',
      'endTime': '2:00 p.m.',
      'dateofOccurrence': 'Fri'
    }
  ],
  'assignments': [
    {
      'title': 'Assig.: Krebs cycle paper',
      'class': 'Chemistry 105',
      'dueDate': 'jan 23',
      'dueTime': '11:59 p.m.'
    }
  ],
  'testOrQuizzes': [
    {
      'title': 'Chemistry Test',
      'class': 'Chemistry 105 Lab',
      'dueDate': 'Jan 27, 2017',
      'dueTime': '11:59 p.m.'
    }
  ],
  'academicMilestones': [
    {
      'title': 'Test: Chapters 4-5',
      'startDate': 'Jan 26',
      'endDate': 'Jan 27',
      'startTime': '10:00 a.m.',
      'endTime': '12:00 noon'
    }
  ],
  'Outlook': [
    {
      'title': 'Test: Chapters 4-5',
      'startDate': 'Jan 26',
      'endDate': 'Jan 27',
      'startTime': '10:00 a.m.',
      'endTime': '12:00 noon',
      'location': 'US'
    }
  ]
};
describe('Next Event actions testing', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const userReqObj = {};
  userReqObj.primaryKey = 'netid';
  userReqObj.primaryValue = '6cb4db8459';

  it('testing action sequence for success case', () => {
    /*
    * Do not delete below lines, as the below lines are used to mock real API service call. 
    */
    
    moxios.stubRequest(`${urlConstants.API_GATEWAY}${urlConstants.ASSIGNMENT}${urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=6cb4db8459`, {
      status: 200,
      response: data
    });
    // moxios.stubRequest(urlConstants.ASSIGNMENTS_API, {
    //   status: 200,
    //   response: data
    // });
    const expectedActions = [
      { type: types.REQUEST_EVENTS_DATA },
      { type: types.RECEIVE_EVENTS_DATA, data: data }
    ];
    const store = mockStore();

    return store.dispatch(actions.getEventsData(userReqObj))
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action  sequence for failure case', () => {
    /*
    * Do not delete below lines, as the below lines are used to mock real API service call. 
    */

    moxios.stubRequest(`${urlConstants.API_GATEWAY}${urlConstants.ASSIGNMENT}${urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=6cb4db8459`, {
      status: 404,
      responseText: 'error'
    });
    // moxios.stubRequest(urlConstants.ASSIGNMENTS_API, {
    //   status: 404,
    //   responseText: 'error'
    // });
    const expectedActions = [
      { type: types.REQUEST_EVENTS_DATA },
      { type: types.RECEIVE_EVENTS_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.getEventsData(userReqObj))
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });
});
