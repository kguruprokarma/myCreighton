/*Created Date: - 21 -02 -2017
*Usage of file: - This action is used to get next events of a user.*
*/

import EventListApi from '../../middleware/events/api';
import * as types from './actionTypes';


let requestData = () => ({
  type: types.REQUEST_EVENTS_DATA
})

let receiveEventsData = (eventsData) => (
  {
    type: types.RECEIVE_EVENTS_DATA,
    data: eventsData
  })

let receiveError = (error) => (
  {
    type: types.RECEIVE_EVENTS_DATA_ERROR,
    data: error
  })

export function getEventsData() {
  return function (dispatch) {
    dispatch(requestData())
    return EventListApi.getEventData().then((response) => {
      dispatch(receiveEventsData(response))
    }
    )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }))
      }
      )
  }
}