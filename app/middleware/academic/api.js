import axios from 'axios';

let AcademicApi = {
  getAcademicData: () => axios.get( '../.././mock_data/academic_data.json' )    
}

export default AcademicApi
