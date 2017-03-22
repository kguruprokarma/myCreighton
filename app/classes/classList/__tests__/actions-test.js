import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data = {
  'classes': [
    {
      'id': '1',
      'name': 'English 112',
      'time': '11am - 12pm',
      'by': 'Miller',
      'place': 'Building Rm 119',
      'on': 'poetry',
      'date': 'jan 27',
      'recurrence': 'Fri'
    }
  ]
};
describe('Class list actions testing', () => {
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
    moxios.stubRequest(`${urlConstants.API_GATEWAY}${urlConstants.STUDENT_CLASSES}${urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=6cb4db8459`, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_CLASSES_DATA },
      { type: types.RECEIVE_CLASSES_DATA, data: data}
    ];
    const store = mockStore();

    return store.dispatch(actions.getClassesDataByWeek(userReqObj))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action  sequence for failure case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.STUDENT_CLASSES + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=6cb4db8459`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_CLASSES_DATA },
      { type: types.RECEIVE_CLASSES_DATA_ERROR, data: 'error'}
    ];
    const store = mockStore();

    return store.dispatch(actions.getClassesDataByWeek(userReqObj))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });
});
