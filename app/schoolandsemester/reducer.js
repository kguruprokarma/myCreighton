import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  isToggle: false,
  descToggle: false
};

const schoolAndSemesterReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    //Student Action Types
    case types.TOGGLE_SHOW_NAV_VIEW:
      return Object.assign({}, state, {
        isToggle: true
      });
    case types.TOGGLE_HIDE_NAV_VIEW:
      return Object.assign({}, state, {
        isToggle: false
      });
    /*case types.SHOW_DESCRIPTION_TAB:
      console.log('types.SHOW_DESCRIPTION_TAB');
      return Object.assign({}, state, {
        descToggle: true
      });
    case types.HIDE_DESCRIPTION_TAB:
      return Object.assign({}, state, {
        descToggle: false
      });*/
    default:
      return state;
  }
};


export default schoolAndSemesterReducer;