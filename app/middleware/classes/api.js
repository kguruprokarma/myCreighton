import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let ClassesApi = {
  getClassesDataByWeek: () => axios.get(urlConstants.ROOT_URL + urlConstants.CLASSES_DATA),
  //later i need to add dynamic id for get class details '/id'
  getClassDetails: (id) => axios.get(urlConstants.ROOT_URL + urlConstants.CLASS_DETAILS_DATA)
}

export default ClassesApi
