/* Created Date: - 17 -FEB -2017
 * API for nex event screens
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let nextEventsApi = {
  getNextEvents: () => axios.get(urlConstants.ROOT_URL + urlConstants.NEXT_EVENTS_STUDENT)
};

export default nextEventsApi;