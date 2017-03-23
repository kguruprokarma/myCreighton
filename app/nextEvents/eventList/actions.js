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
