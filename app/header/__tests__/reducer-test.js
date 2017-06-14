import * as types from '../actionTypes';
import reducer from '../reducer';

describe('Header reducer testing ----->', () => {
  const defaultState = reducer(undefined, {});
  it('if reducers passed with no state and actiontype', () => {
    expect(reducer(undefined, {})).toBe(defaultState);
  });

  it('reducer pop up state', () => {
    const expectedState = { showPopUp: true};
    const afterState = reducer({}, {type: types.OPEN_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer close pop state', () => {
    const expectedState = { showPopUp: false};
    const afterState = reducer({}, {type: types.CLOSE_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer open nav state', () => {
    const expectedState = { showNav: true};
    const afterState = reducer({}, {type: types.OPEN_NAV});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer close pop state', () => {
    const expectedState = { showNav: false};
    const afterState = reducer({}, {type: types.CLOSE_NAV});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('sign out pop up open state', () => {
    const expectedState = { signOut: true};
    const afterState = reducer({}, {type: types.SIGN_OUT_OPEN});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it(' sign out pop up close state', () => {
    const expectedState = { signOut: false};
    const afterState = reducer({}, {type: types.SIGN_OUT_CLOSE});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('filter pop up open state', () => {
    const expectedState = { showFilterPopUp: true};
    const afterState = reducer({}, {type: types.OPEN_FILTER_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('filter pop up close state', () => {
    const expectedState = { showFilterPopUp: false};
    const afterState = reducer({}, {type: types.CLOSE_FILTER_POPUP});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });
});