/* Created Date: - 17-FEB-2017
 * actions for next events
 */
import EventDetailsApi from '../../middleware/events/api';
import * as types from './actionTypes';


const requestEventDetailsData = () => ({
  type: types.REQUEST_EVENT_DETAILS_DATA
});

const receiveEventDetailsData = (eventDetails) => (
  {
    type: types.RECEIVE_EVENT_DETAILS_DATA,
    data: eventDetails
  });

const receiveEventDetailsError = (error) => (
  {
    type: types.RECEIVE_EVENT_DETAILS_DATA_ERROR,
    data: error
  });

export function getEventDetails() {
  return function (dispatch) {
    dispatch(requestEventDetailsData());
    return EventDetailsApi.getEventDetails().then((response) => {
      dispatch(receiveEventDetailsData(response));
    })
      .catch((error) => {
        dispatch(receiveEventDetailsError({
          error: error
        }));
      });
  };
}
