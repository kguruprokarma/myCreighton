/* Created Date: - 17-FEB-2017
 * actions for next events
 */
import EventDetailsApi from '../../middleware/events/api';
import * as types from './actionTypes';

/*
* Event Class details
*/
const requestEventClassDetailsData = () => ({
  type: types.REQUEST_EVENT_CLASS_DETAILS_DATA
});

const receiveEventClassDetailsData = (eventDetails) => (
  {
    type: types.RECEIVE_EVENT_CLASS_DETAILS_DATA,
    data: eventDetails
  });

const receiveEventClassDetailsError = (error) => (
  {
    type: types.RECEIVE_EVENT_CLASS_DETAILS_DATA_ERROR,
    data: error
  });

export function getEventClassDetails(eventType) {
  return function (dispatch) {
    dispatch(requestEventClassDetailsData());
    return EventDetailsApi.getEventDetails(eventType).then((response) => {
      dispatch(receiveEventClassDetailsData(response));
    })
      .catch((error) => {
        dispatch(receiveEventClassDetailsError({
          error: error
        }));
      });
  };
}

/*
* Event Assignment details
*/
const requestEventAssignmentDetailsData = () => ({
  type: types.REQUEST_EVENT_ASSIGNMENTS_DETAILS_DATA
});

const receiveEventAssignmentDetailsData = (eventDetails) => (
  {
    type: types.RECEIVE_EVENT_ASSIGNMENTS_DETAILS_DATA,
    data: eventDetails
  });

const receiveEventAssignmentDetailsError = (error) => (
  {
    type: types.RECEIVE_EVENT_ASSIGNMENTS_DETAILS_DATA_ERROR,
    data: error
  });

export function getEventAssignmentDetails(eventType) {
  return function (dispatch) {
    dispatch(requestEventAssignmentDetailsData());
    return EventDetailsApi.getEventDetails(eventType).then((response) => {
      dispatch(receiveEventAssignmentDetailsData(response));
    })
      .catch((error) => {
        dispatch(receiveEventAssignmentDetailsError({
          error: error
        }));
      });
  };
}

/*
* Event Quiz details
*/
const requestEventQuizDetailsData = () => ({
  type: types.REQUEST_EVENT_QUIZ_DETAILS_DATA
});

const receiveEventQuizDetailsData = (eventDetails) => (
  {
    type: types.RECEIVE_EVENT_QUIZ_DETAILS_DATA,
    data: eventDetails
  });

const receiveEventQuizDetailsError = (error) => (
  {
    type: types.RECEIVE_EVENT_QUIZ_DETAILS_DATA_ERROR,
    data: error
  });

export function getEventQuizDetails(eventType) {
  return function (dispatch) {
    dispatch(requestEventQuizDetailsData());
    return EventDetailsApi.getEventDetails(eventType).then((response) => {
      dispatch(receiveEventQuizDetailsData(response));
    })
      .catch((error) => {
        dispatch(receiveEventQuizDetailsError({
          error: error
        }));
      });
  };
}
