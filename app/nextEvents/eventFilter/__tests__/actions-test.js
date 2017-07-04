import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Event Filter actions', () => {
  it('testing filterChange', () => {
    const expectedActions = [{ type: types.FILTER_CHANGE }];
    const store = mockStore();
    store.dispatch(actions.filterChange());
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('testing dateChange', () => {
    const expectedActions = [{ type: types.DATE_CHANGE }];
    const store = mockStore();
    store.dispatch(actions.dateChange());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
