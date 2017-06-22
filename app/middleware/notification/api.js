import axios from 'axios';
import * as qs from 'querystring';
import * as urlConstants from '../../constants/urlConstants';

const NotificationApi = {
  // getNotifications: () => axios.get(`${urlConstants.ROOT_URL}/notifiction_data.json`),
  // getNotifications: () => axios.get(`${urlConstants.NOTIFICATION_URL}`),
  //getNotifications: () => axios.get(`${urlConstants.NOTIFICATION_URL}/notifications`),
 // sendNotification: (message) => axios.post(`${urlConstants.NOTIFICATION_URL}/newnotifications`, {newNotification: message})
  // sendNotification: (message) => axios.post('https://dev-dl-api.creighton.edu/notification', qs.stringify(message), {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
};

export default NotificationApi;