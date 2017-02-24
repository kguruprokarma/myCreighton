/* Created Date: - 17-FEB-2017
 * actions for next events
 */
import EventDetailsApi from '../../middleware/events/api';
import * as types from './actionTypes';


let requestEventDetailsData = () => ({
  type: types.REQUEST_EVENT_DETAILS_DATA
});

let receiveEventDetailsData = (eventDetails) => (
  {
    type: types.RECEIVE_EVENT_DETAILS_DATA,
    data: eventsDetail
  });

let receiveEventDetailsError = (error) => (
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
