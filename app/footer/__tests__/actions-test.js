/*Created Date: - 06 -06 -2017
*Usage of file: - This script is for unit test of actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from '../actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Test case for actions for footer', () => {
  it('testing action show help case', () => {
    const expectedActions = [{ type: types.OPEN_HELP_POPUP }];
    const store = mockStore();
    store.dispatch(actions.helpPopUpOpen());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action hide help case', () => {
    const expectedActions = [{ type: types.CLOSE_HELP_POPUP }];
    const store = mockStore();
    store.dispatch(actions.helpPopUpClose());
    expect(store.getActions()).toEqual(expectedActions);
  });
});