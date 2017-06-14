/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const EventListApi = {
  getEventsData: () => axios.get(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.ASSIGNMENT}`),
  getCalendarData: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.CALENDAR_DATA)
};

export default EventListApi;