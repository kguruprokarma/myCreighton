import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
  "classes": [
    {
      "className": "English 112",
      "meetingLocation": "Building Rm 119",
      "startTime": "1:00 p.m.",
      "endTime": "2:00 p.m.",
      "dateofOccurrence": "Fri"
    },
    {
      "className": "Chemistry 105",
      "meetingLocation": "Building Rm 119",
      "startTime": "1:00 p.m.",
      "endTime": "2:00 p.m.",
      "dateofOccurrence": "Fri"
    }
  ],
  "assignments": [
    {
      "title": "Assig.: Krebs cycle paper",
      "class": "Chemistry 105",
      "dueDate": "jan 23",
      "dueTime": "11:59 p.m."
    }
  ],
  "testOrQuizzes": [
    {
      "title": "Chemistry Test",
      "class": "Chemistry 105 Lab",
      "dueDate": "Jan 27, 2017",
      "dueTime": "11:59 p.m."
    }
  ],
  "academicMilestones": [
    {
      "title": "Test: Chapters 4-5",
      "startDate": "Jan 26",
      "endDate": "Jan 27",
      "startTime": "10:00 a.m.",
      "endTime": "12:00 noon"
    }
  ],
  "Outlook": [
    {
      "title": "Test: Chapters 4-5",
      "startDate": "Jan 26",
      "endDate": "Jan 27",
      "startTime": "10:00 a.m.",
      "endTime": "12:00 noon",
      "location": "US"
    }
  ]
}
describe('Next Event actions testing', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  it('testing action sequence for success case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.EVENTS_DATA, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_EVENTS_DATA },
      { type: types.RECEIVE_EVENTS_DATA, data: data }
    ]
    const store = mockStore()

    return store.dispatch(actions.getEventsData())
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action  sequence for failure case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.EVENTS_DATA, {
      status: 404,
      responseText: "error"
    });
    const expectedActions = [
      { type: types.REQUEST_EVENTS_DATA },
      { type: types.RECEIVE_EVENTS_DATA_ERROR, data: "error" }
    ]
    const store = mockStore()

    return store.dispatch(actions.getEventsData())
      .then(() => {
        let result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})
