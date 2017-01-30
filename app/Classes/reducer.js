import * as types from './actions';

const initialState = {
  classesData: {},
  isLoading: false,
  error: false,
  catagoryName:"Week"
};

const classesReducer = (state = initialState, action = null)=> {
	switch(action && action.type)
	{
		case types.RECEIVE_CLASSES_DATA_ERROR:
			return Object.assign( {}, state, {
			isLoading: false,
			error: true,
			classesData: []	
		})
		case types.REQUEST_CLASSES_DATA:
			return Object.assign( {}, state, {
			isLoading: true,
			error: false
		})
		case types.RECEIVE_CLASSES_DATA:
			return Object.assign( {}, state, {
			isLoading: false,
			classesData: action.data
		})
		case types.ON_CATAGORY_CHANGE:
			return Object.assign( {}, state, {
				catagoryName: action.data

			})
		default:
      		return state
	}
}
	
	
export default classesReducer