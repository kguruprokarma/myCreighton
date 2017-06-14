import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const NotificationApi = {
  getNotifications: () => axios.get(`${urlConstants.NOTIFICATION_URL}/notifications`),
  sendNotification: (message) => axios.post(`${urlConstants.NOTIFICATION_URL}/newnotifications`, {newNotification: message})
};

export default NotificationApi;