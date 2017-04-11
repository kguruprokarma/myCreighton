/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
  'libraryInformation': [{
    'reinertAlumni': {
      'titile': '2500 California Plz, Omaha, NE 60179',
      'reference': '402.280.2225 | askus@creighton.edu',				
      'circulation': '402.280.2160 | ralcirc@creighton.edu',
      'main': '402.280.2227 | 877.266.5501',
      'text:': '402.507.4272',
      'automatedAttendant:': '402.280.2705',
      'chat:': 'Online chat'
    },
    'healthSciences': {
      'titile': '1234 Creighton St, Omaha, NE 60179',
      'reference': 'refdesk@creighton.edu',				
      'circulation': '402.280.2160 | ralcirc@creighton.edu',
      'main': '402.280.5108',
      'text:': '402.507.4272',
      'automatedAttendant:': '402.280.2705',
      'chat:': 'Online chat'
    },
    'law': {
      'titile': 'Ahmanson Law Center, 2nd floor 2100 Cass St, Omaha, NE 60179',
      'reference': '402.280.5541 | lawref@lists.creighton.edu | hours',				
      'circulation': '402.280.2242',
      'main': '402.280.2875',
      'admin': '402.507.2815',
      'chat:': 'Online chat'
    }
  }]
};
describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('testing action retrival case', () => {
    moxios.stubRequest(`${urlConstants.ROOT_URL}/libraryInformation.json`, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_LIBRARY_DATA },
      { type: types.RECEIVE_LIBRARY_DATA, data: data }
    ];
    const store = mockStore();

    return store.dispatch(actions.getLibraryData())
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action failure case', () => {
    moxios.stubRequest(`${urlConstants.ROOT_URL}/libraryInformation.json`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_LIBRARY_DATA },
      { type: types.RECEIVE_LIBRARY_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.getLibraryData())
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });
});
