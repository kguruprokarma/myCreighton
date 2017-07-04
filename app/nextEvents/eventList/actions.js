/*Created Date: - 21 -02 -2017
*Usage of file: - This action is used to get next events of a user.*
*/

import EventListApi from '../../middleware/events/api';
import * as types from './actionTypes';

const requestData = () => ({
  type: types.REQUEST_EVENTS_DATA
});

const receiveEventsData = (eventsData) => (
  {
    type: types.RECEIVE_EVENTS_DATA,
    data: eventsData
  });

const receiveError = (error) => (
  {
    type: types.RECEIVE_EVENTS_DATA_ERROR,
    data: error
  });

const masterDataChange = (bool) => (
  {
    type: types.ON_MASTER_DATA_CHANGE,
    data: bool
  } 
 );

const loadingChange = () => (
  {
    type: types.ON_LOADING_CHANGE
  } 
 );
const requestCalendarDetailsData =() => ({
  type: types.REQUEST_CALENDAR_DETAILS_DATA
});

const receiveCalendarDetailsData =(calendarData) => ({
  type: types.RECEIVE_CALENDAR_DETAILS_DATA,
  data: calendarData
});

const receiveCalendarDetailsError =(error) => ({
  type: types.RECEIVE_CALENDAR_DETAILS_DATA_ERROR,
  data: error
});

const offLoadingChange = () => (
  {
    type: types.OFF_LOADING_CHANGE
  } 
 );

export function onMasterDataChange(bool) {
  return function (dispatch) {
    dispatch(masterDataChange(bool));
  };
}

export function onLoading() {
  return function (dispatch) {
    dispatch(loadingChange());
  };
}

export function onReceiveError(error) {
  return function (dispatch) {
    dispatch(receiveError(error));
  };
}

export function offLoading() {
  return function (dispatch) {
    dispatch(offLoadingChange());
  };
}


export function getEventsData(reqObj) {
  return function (dispatch) {
    dispatch(requestData());
    return EventListApi.getEventsData(reqObj).then((response) => {
      dispatch(receiveEventsData(response));
    }
    )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }));
      }
      );
  };
}

export function getCalendarData(reqObj) {
  return function (dispatch) {
    dispatch(requestCalendarDetailsData());
    return EventListApi.getCalendarData(reqObj).then((response) => {
      dispatch(receiveCalendarDetailsData(response.data));
    })
     .catch((error) => {
       dispatch(receiveCalendarDetailsError({
         error: error
       }));
     });
  };
}
export default getEventsData;
