/* Created Date: - 21st, Mar-2017
 * This file is used to communicate with server side campus directory search APIs
 */
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const CampusDirectoryApi = {
  getCampusDirectory: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.CAMPUS_DIRECTORY_SIMPLE, { params: reqObj })
  //getCampusDirectory: (query) => axios.get(`${urlConstants.ROOT_URL}/campusDirectorySearch.json`)
};

export default CampusDirectoryApi;