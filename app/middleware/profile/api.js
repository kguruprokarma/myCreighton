import axios from 'axios';

let ProfileApi = {
  getProfileData: () => axios.get( '../.././mock_data/myProfile.json' )    
}

export default ProfileApi
