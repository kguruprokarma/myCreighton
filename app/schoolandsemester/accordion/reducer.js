import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  accordionToggle: false
};

const accordionReducer = (state = initialState, action = null) => {
  //console.log(action);
  switch (action && action.type) {
    case types.SHOW_ACCORDION_TAB:
    //console.log('.type: ', action.type);
      return Object.assign({}, state, {
        accordionToggle: true
      });
    case types.HIDE_ACCORDION_TAB:
    //console.log('.type: ', action.type);
      return Object.assign({}, state, {
        accordionToggle: false
      });
    default:
      return state;
  }
};


export default accordionReducer;