/*Created Date: - 9th-MAY-2017
*Usage of file: - This action is used to post FEEDBACK.*
*/

import FeedbackApi from '../middleware/feedback/api';
import * as types from './actionTypes';


const requestPostFeedbackData = () => ({
  type: types.REQUEST_FEEDBACK_DATA
});

const receiveFeedbackData = (feedBack) => (
  {
    type: types.RECEIVE_FEEDBACK_DATA,
    data: feedBack
  });

const receiveFeedbackError = (error) => (
  {
    type: types.RECEIVE_FEEDBACK_DATA_ERROR,
    data: error
  }
);

export function postFeedback(feedbackData) {
  return function (dispatch) {
    dispatch(requestPostFeedbackData());
    return FeedbackApi.postFeedback(feedbackData).then((response) => {
      dispatch(receiveFeedbackData(response));
    })
      .catch((error) => {
        dispatch(receiveFeedbackError({
          error: error
        }));
      });
  };
}

export default postFeedback;