/* Created Date: - 24nd, Mar -2017
 * This file is used for unit testing for actions in  campus directory search js file
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data = {
  netid: '9cd0a3991e',
  banner_pidm: null,
  emp_number: '8618',
  fac_first_name: 'f089eaef57',
  fac_last_name: 'f79979bf40',
  fac_middle_name: 'C',
  full_name: '8f10d58bf7',
  job_title: 'Y.Lecturer',
  organization: '201000 Dean\'s Office - Arts & Sciences',
  phone: '',
  work_address: {
    work_Address_line1: null,
    work_Address_line2: null,
    work_Address_line3: null,
    work_State_code: null,
    work_postal_code: null,
    work_town_or_city: null
  },
  work_email: null
};
describe('actions testing for campus directory search', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  
  const userReqObj = {};
  userReqObj.firstName = 'f';
  userReqObj.lastName = 'f7';
  
  it('testing action sequence for success case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY}${urlConstants.CAMPUS_DIRECTORY_SIMPLE}?firstName=f&lastName=f7`, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_SIMPLE_SEARCH_DATA },
      { type: types.RECEIVE_SIMPLE_SEARCH_DATA, data: data}
    ];
    const store = mockStore();

    return store.dispatch(actions.getCampusDirectoryData(userReqObj))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action  sequence for failure case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.CAMPUS_DIRECTORY_SIMPLE}?firstName=f&lastName=f7`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_SIMPLE_SEARCH_DATA },
      { type: types.RECEIVE_SIMPLE_SEARCH_DATA_ERROR, data: 'error'}
    ];
    const store = mockStore();

    return store.dispatch(actions.getCampusDirectoryData(userReqObj))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('reset CampusDirectory Data', () => {
    const expectedActions = [{ type: types.RESET_SIMPLE_SEARCH_DATA }];
    const store = mockStore();
    store.dispatch(actions.resetCampusDirectoryData());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action close popup case', () => {
    const expectedActions = [{ type: types.CLICKED_SEARCH }];
    const store = mockStore();
    store.dispatch(actions.searchItemClicked());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action open nav case', () => {
    const expectedActions = [{ type: types.RESET_SEARCH }];
    const store = mockStore();
    store.dispatch(actions.resetSearchItemClicked());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
