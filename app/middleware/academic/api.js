import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let AcademicApi = {
  getAcademicData: () => axios.get(urlConstants.ROOT_URL + urlConstants.ACADEMIC_DATA)    
}

export default AcademicApi
