import * as types from '../actionTypes';
import reducer from '../reducer';

describe('Header reducer testing ----->', () => {
  const defaultState = reducer(undefined, {});
  it('if reducers passed with no state and actiontype', () => {
    expect(reducer(undefined, {})).toBe(defaultState);
  });

  it('reducer pop up state', () => {
    const expectedState = { isLoading: false };
    const afterState = reducer({}, {type: types.FILTER_CHANGE});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });
  it('reducer pop up state', () => {
    const expectedState = { isLoading: false };
    const afterState = reducer({}, {type: types.DATE_CHANGE});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });  
});