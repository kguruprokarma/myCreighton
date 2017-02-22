import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../actionTypes';
import * as actions from '../actions';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('header actions', () => {

  it('testing action popup case', () => {
    const expectedActions = [{ type: types.OPEN_POPUP }];
    const store = mockStore();
    store.dispatch(actions.popUpOpen());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action close popup case', () => {
    const expectedActions = [{ type: types.CLOSE_POPUP }];
    const store = mockStore();
    store.dispatch(actions.popUpClose());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action open nav case', () => {
    const expectedActions = [{ type: types.OPEN_NAV }];
    const store = mockStore();
    store.dispatch(actions.navOpen());
    expect(store.getActions()).toEqual(expectedActions);
  });
it('testing action retrival case', () => {
    const expectedActions = [{ type: types.CLOSE_NAV }];
    const store = mockStore();
    store.dispatch(actions.navClose());
    expect(store.getActions()).toEqual(expectedActions);
  });
})