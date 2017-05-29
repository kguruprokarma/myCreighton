import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const NotificationApi = {
  getNotifications: () => axios.get('http://localhost:8081/notifications'),
  sendNotification: (message) => axios.post('http://localhost:8081/newnotifications', {newNotification: message})
};

export default NotificationApi;