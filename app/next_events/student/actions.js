/* Created Date: - 17-FEB-2017
 * actions for next events
 */
import NextEventsApi from '../middleware/next_events/api';
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

export function getNextEvents() {
  return function (dispatch) {
    dispatch(requestNextEventsData());
    return NextEventsApi.getNextEvents().then((response) => {
      dispatch(receiveNextEventsData(response));
    })
      .catch((error) => {
        dispatch(receiveNextEventsError({
          error: error
        }));
      });
  };
}