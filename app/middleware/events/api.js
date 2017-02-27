/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const EventListApi = {
  getEventData: () => axios.get(urlConstants.ROOT_URL + urlConstants.EVENTS_DATA),
  getEventDetails: () => axios.get(urlConstants.ROOT_URL + urlConstants.EVENT_DETAILS)  
};

export default EventListApi;
