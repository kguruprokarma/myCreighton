import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const LogApi = {
  sendLog: (logInfo) => axios.post(`${urlConstants.NOTIFICATION_URL}/uilog`, logInfo)
};

export default LogApi;