import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionType';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('header actions', () => {
  it('testing action receive data case', () => {
    const expectedActions = [{ type: types.REQUEST_STAFF_SEARCH_PROFILE_DATA }];
    const store = mockStore();
    store.dispatch(actions.onReceiveData());
    expect(store.getActions()).toEqual(expectedActions);
  });
});