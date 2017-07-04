/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side profile APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const topLevelSearchApi = {
  searchData: () => axios.get(urlConstants.SEARCH_DATA)
};

export default topLevelSearchApi;