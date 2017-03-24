import * as types from '../actionTypes';
import reducer from '../reducer';

describe('Header reducer testing ----->', () => {
  const defaultState = reducer(undefined, {});
  const error = new Error('Error :: Something went wrong!!!');
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
});