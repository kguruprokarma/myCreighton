/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const AcademicApi = {
  getAcademicData: () => axios.get('http://api-gateway01.creighton.edu/studentAcademic/single?primaryKey=asdfdsg&primaryValue=2775739283')    
};

export default AcademicApi;
