/*Created Date: - 9th -MAY -2017
*Usage of file: - This file is used to communicate feedback APIs*
*/

import axios from 'axios';
import * as qs from 'querystring';
import * as urlConstants from '../../constants/urlConstants';

const FeedbackApi = {
  postFeedback: (formData) => axios.post(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.FEEDBACK, qs.stringify(formData), {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
};

export default FeedbackApi;
