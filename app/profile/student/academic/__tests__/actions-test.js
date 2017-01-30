import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../../constants/urlConstants';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data = {
"studentProfile": {
    "academicDetail": {
      "status": {
        "major": "Zoology",
        "minor": "none",
        "class": "Sophomore",
        "ranking": "89",
        "enrollment": "Active",
        "disciplinary": "none"
      },
    "advisorDetail": {
      "name": {
        "first": "Marshall",
        "middle": "M",
        "last": "Zimmerman"
      },
      "area": "Biological sciences",
      "office": "Building name Rm 314",
      "officeHours": {
        "startTime": "09:00am",
        "endTime": "06:00pm",
        "weekDays": "MON, WED, FRI"
      },
      "emailAddress": "mzimmerman@creighton.edu"
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
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.ACADEMIC_DATA, {
      status: 200,
      response:  data
    });
    const expectedActions = [
      { type: types.REQUEST_ACADEMIC_DATA },
      { type: types.RECEIVE_ACADEMIC_DATA, data: data}
    ]
    const store = mockStore()

    return store.dispatch(actions.getAcademicData())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.ACADEMIC_DATA, {
      status: 404,
      responseText:  "error"
    });
    const expectedActions = [
      { type: types.REQUEST_ACADEMIC_DATA },
      { type: types.RECEIVE_ACADEMIC_DATA_ERROR, data:"error"}
    ]
    const store = mockStore()

    return store.dispatch(actions.getAcademicData())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})