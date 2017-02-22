/* Created Date: - 17-FEB-2017
 * actions for next events
 */
import EventsDetailApi from '../../middleware/events/api';
import * as types from './actionTypes';


let requestEventsDetailData = () => ({
  type: types.REQUEST_EVENTS_DETAIL_DATA
});

let receiveEventsDetailData = (eventsDetail) => (
  {
    type: types.RECEIVE_EVENTS_DETAIL_DATA,
    data: eventsDetail
  });

let receiveEventsDetailError = (error) => (
  {
    type: types.RECEIVE_EVENTS_DETAIL_DATA_ERROR,
    data: error
  });

export function getEventsDetail() {
  return function (dispatch) {
    dispatch(requestEventsDetailData());
    return EventsDetailApi.getEventsDetail().then((response) => {
      dispatch(receiveEventsDetailData(response));
    })
      .catch((error) => {
        dispatch(receiveEventsDetailError({
          error: error
        }));
      });
  };
}
