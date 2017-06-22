import * as types from '../actionTypes';
import {headerReducer, signOutReducer} from '../reducer';

describe('Header reducer testing ----->', () => {
  const defaultState = headerReducer(undefined, {});
  it('if headerReducers passed with no state and actiontype', () => {
    expect(headerReducer(undefined, {})).toBe(defaultState);
  });

  it('headerReducer pop up state', () => {
    const expectedState = { showPopUp: true};
    const afterState = headerReducer({}, {type: types.OPEN_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('headerReducer close pop state', () => {
    const expectedState = { showPopUp: false};
    const afterState = headerReducer({}, {type: types.CLOSE_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('headerReducer open nav state', () => {
    const expectedState = { showNav: true};
    const afterState = headerReducer({}, {type: types.OPEN_NAV});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('headerReducer close pop state', () => {
    const expectedState = { showNav: false};
    const afterState = headerReducer({}, {type: types.CLOSE_NAV});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('sign out pop up open state', () => {
    const expectedState = { signOut: true};
    const afterState = signOutReducer({}, {type: types.SIGN_OUT_OPEN});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it(' sign out pop up close state', () => {
    const expectedState = { signOut: false};
    const afterState = signOutReducer({}, {type: types.SIGN_OUT_CLOSE});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('filter pop up open state', () => {
    const expectedState = { showFilterPopUp: true};
    const afterState = headerReducer({}, {type: types.OPEN_FILTER_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('filter pop up close state', () => {
    const expectedState = { showFilterPopUp: false};
    const afterState = headerReducer({}, {type: types.CLOSE_FILTER_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });
});