import * as types from '../actionTypes';
import reducer from '../reducer';

describe('Header reducer testing ----->', () => {
  const defaultState = reducer(undefined, {});
  const error = new Error('Error :: Something went wrong!!!');
  it('if reducers passed with no state and actiontype', () => {
    expect(reducer(undefined, {})).toBe(defaultState);
  });

  it('reducer pop up state', () => {
    const expectedState = { isLoading: false };
    const afterState = reducer({}, {type: types.FILTER_CHANGE});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });  
});