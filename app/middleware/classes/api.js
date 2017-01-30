import axios from 'axios';

let ClassesApi = {
  getClassesDataByWeek: () => axios.get( '../.././mock_data/classes.json' ),
  getClassesDataByToday: () => axios.get( '../.././mock_data/classesDataForToday.json' ),
  getClassesAtoZData: () => axios.get( '../.././mock_data/classesDataForAtoZ.json' )
}

export default ClassesApi
