import * as types from './actionTypes';

const initialState = {
  notificationData: [],
  isLoading: false,
  // newNotificationData: [],
  newNotification: true,
  error: false
};

const notificationReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_NOTIFICATION_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_NOTIFICATION_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        notificationData: action.data.data
      });
    // case types.RECEIVE_NOTIFICATION_DATA_ERROR:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     error: true,
    //     notificationData: []
    //   });
    // case types.REQUEST_SENDING_NEW_NOTICATION:
    //   return Object.assign({}, state, {
    //     error: false
    //   });
    // case types.RECEIVE_SENDING_NEW_NOTICATION:
    //   return Object.assign({}, state, {
    //     newNotification: true,       
    //     notificationData: [Object.assign({}, action.data.data, {newNotification: true}), ...state.notificationData]
    //   });
    // case types.RECEIVE_SENDING_NEW_NOTICATION_ERROR:
    //   return Object.assign({}, state, {
    //     error: true
    //   });
    case types.RESET_NEW_NOTIFICATIONS:
      return Object.assign({}, state, {
        newNotification: false
      });
    case types.SET_NEW_NOTIFICATIONS:
      return Object.assign({}, state, {
        newNotification: true
      });
    default:
      return state;
  }
};


export default notificationReducer;