/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const EventListApi = {
  //getEventData: () => axios.get(urlConstants.ROOT_URL + urlConstants.EVENTS_DATA),
  //getEventDetails: (eventType) => axios.get(`${urlConstants.ROOT_URL}${urlConstants[eventType]}`)
  getEventDetails: (eventType) => axios.get(`${urlConstants[eventType]}`),
  // getClassesDataByWeek: (reqObj) => axios.get(`${urlConstants.API_GATEWAY}${urlConstants.STUDENT_CLASSES}${urlConstants.API_SINGLE}`, {params: reqObj}),
  getEventsData: () => axios.get(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.ASSIGNMENT}`)
};

export default EventListApi;