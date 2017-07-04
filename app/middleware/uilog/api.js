import axios from 'axios';
import * as qs from 'querystring';
import {DEV_URL_CREIGHTON_ADFS, SPA_LOG} from '../../constants/urlConstants';

const LogApi = {
  sendLog: (logInfo) => axios.post(DEV_URL_CREIGHTON_ADFS + SPA_LOG, qs.stringify(logInfo), {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
};

export default LogApi;