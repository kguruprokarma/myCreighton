import * as types from '../actionTypes';
import { eventsReducer, eventsCalenderReducer} from '../reducer';

describe('Next Event list reducer testing ----->', () => {
  const defaultState = eventsReducer(undefined, {});
  const error = new Error('Error :: Something went wrong!!!');
  it('if reducers passed with no state and actiontype', () => {
    expect(eventsReducer(undefined, {})).toBe(defaultState);
  });

  it('eventsReducer request state', () => {
    const expectedState = {...defaultState, isLoading: true};
    const afterState = eventsReducer(undefined, { type: types.REQUEST_EVENTS_DATA });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('eventsReducer recieve state', () => {
    const data = { 'name': 'myCreighton' };
    const expectedState = { isLoading: false, eventsData: data };
    const afterState = eventsReducer({}, { type: types.RECEIVE_EVENTS_DATA, data: data });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('eventsReducer error state', () => {
    const expectedState = { isLoading: false, error: true, eventsData: [] };
    const afterState = eventsReducer({}, { type: types.RECEIVE_EVENTS_DATA_ERROR, error });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('eventsReducer onMasterDataChange state', () => {
    const data = { 'name': 'myCreighton' };
    const expectedState = { isMasterDataChange: data};
    const afterState = eventsReducer({}, {type: types.ON_MASTER_DATA_CHANGE, data});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('testing action on loading change case', () => {
    const expectedState = {...defaultState, isLoading: true};
    const afterState = eventsReducer(undefined, { type: types.ON_LOADING_CHANGE });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('testing action off loading case', () => {
    const expectedState = {...defaultState, isLoading: false};
    const afterState = eventsReducer(undefined, { type: types.OFF_LOADING_CHANGE });
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('eventsCalenderReducer request calender state', () => {
    const expectedState = {...defaultState, isLoading: true};
    const afterState = eventsCalenderReducer(undefined, {type: types.REQUEST_CALENDAR_DETAILS_DATA});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });

  it('eventsCalenderReducer receive cakender state', () => {
    const data = {'event_type': 'Exploring your Strengths'};
    const expectedState = {isLoading: false, calendarDetailData: data};
    const afterState = eventsCalenderReducer({}, {type: types.RECEIVE_CALENDAR_DETAILS_DATA, data: data});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));  
  });

  it('eventsCalenderReducer error calender state', () => {
    const expectedState = {isLoading: false, error: true, calendarDetailData: [] };
    const afterState = eventsCalenderReducer({}, {type: types.RECEIVE_CALENDAR_DETAILS_DATA_ERROR, error});
    expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
  });
});