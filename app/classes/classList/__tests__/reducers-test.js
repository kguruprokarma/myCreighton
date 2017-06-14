import * as types from '../actionTypes';
import reducer from '../reducer';

describe('ClassList reducer testing ----->', () => {
  const defaultState = reducer(undefined, {});
  const error = new Error('Error :: Something went wrong!!!');
  it('if reducers passed with no state and actiontype', () => {
    expect(reducer(undefined, {})).toBe(defaultState);
  });

  it('reducer request state', () => {
    const expectedState = { ...defaultState, isLoading: true };
    const afterState = reducer(undefined, { type: types.REQUEST_CLASSES_DATA });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer recieve state', () => {
    const data = { 'name': 'myCreighton' };
    const expectedState = { isLoading: false, classesData: data };
    const afterState = reducer({}, { type: types.RECEIVE_CLASSES_DATA, data: data });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer error state', () => {
    const expectedState = { isLoading: false, error: true, classesData: [] };
    const afterState = reducer({}, { type: types.RECEIVE_CLASSES_DATA_ERROR, error });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer ON_CATAGORY_CHANGE state', () => {
    const expectedState = { isLoading: true };
    const afterState = reducer({}, { type: types.ON_CATAGORY_CHANGE });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer request(RECEIVE_ASSIGNMENTS_DATA_ERROR) state', () => {
    const expectedState = { isLoading: false, error: true, assignmentsData: [] };
    const afterState = reducer({}, {type: types.RECEIVE_ASSIGNMENTS_DATA_ERROR});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer request(REQUEST_ASSIGNMENTS_DATA) state', () => {
    const expectedState = { ...defaultState, isLoading: true };
    const afterState = reducer(undefined, { type: types.REQUEST_ASSIGNMENTS_DATA });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('reducer request(RECEIVE_ASSIGNMENTS_DATA) state', () => {
    const data = { 'name': 'myCreighton' };
    const expectedState = { isLoading: false, assignmentsData: data };
    const afterState = reducer({}, { type: types.RECEIVE_ASSIGNMENTS_DATA, data: data });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });
});