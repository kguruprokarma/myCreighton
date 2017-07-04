import * as types from '../actionType';
import reducer from '../reducer';

describe('Header reducer testing ----->', () => {
  const defaultState = reducer(undefined, {});
  it('if reducers passed with no state and actiontype', () => {
    expect(reducer(undefined, {})).toBe(defaultState);
  });

  it('reducer recieve state', () => {
    const data = { 'first_name': 'Jhon', 'job_title': 'Facluty' };
    const expectedState = { profileData: data };
    const afterState = reducer({}, { type: types.REQUEST_STAFF_SEARCH_PROFILE_DATA, data: data });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });
});