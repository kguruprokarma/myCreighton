/* Created Date: - 17-FEB-2017
 * actions for next events
 */
import NextEventsApi from '../../middleware/events/api';
import * as types from './actionTypes';


let requestNextEventsData = () => ({
  type: types.REQUEST_NEXT_EVENTS_DATA
});

let receiveNextEventsData = (nextEvents) => (
  {
    type: types.RECEIVE_NEXT_EVENTS_DATA,
    data: nextEvents
  });

let receiveNextEventsError = (error) => (
  {
    type: types.RECEIVE_NEXT_EVENTS_DATA_ERROR,
    data: error
  });

export function getEventsDetail() {
  return function (dispatch) {
    dispatch(requestNextEventsData());
    return NextEventsApi.getEventsDetail().then((response) => {
      dispatch(receiveNextEventsData(response));
    })
      .catch((error) => {
        dispatch(receiveNextEventsError({
          error: error
        }));
      });
  };
}