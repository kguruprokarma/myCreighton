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
describe('Classes actions testing', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  
  const userReqObj = {};
  userReqObj.primaryKey = 'netid';
  userReqObj.primaryValue = '6cb4db8459';
  
  it('testing get classes data', () => {
    const expectedActions = [
      { type: types.REQUEST_CLASSES_DATA },
      { type: types.RECEIVE_CLASSES_DATA, data: data}
    ];
    const store = mockStore();
    store.dispatch(actions.getClassesData(data));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing get assignment data', () => {
    const expectedActions = [
      { type: types.REQUEST_ASSIGNMENTS_DATA },
      { type: types.RECEIVE_ASSIGNMENTS_DATA, data: data}
    ];
    const store = mockStore();
    store.dispatch(actions.getAssignmentDetails(data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
