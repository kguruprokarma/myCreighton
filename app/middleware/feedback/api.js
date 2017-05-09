/*Created Date: - 9th -MAY -2017
*Usage of file: - This file is used to communicate feedback APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const FeedbackApi = {
  postFeedback: (formData) => axios.post(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.FEEDBACK, formData)
};

export default FeedbackApi;
