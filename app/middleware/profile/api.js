import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let ProfileApi = {
  getProfileData: () => axios.get( urlConstants.ROOT_URL + urlConstants.PROFILE_DATA)    
}

export default ProfileApi
