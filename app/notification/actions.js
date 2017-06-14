
import * as types from './actionTypes';
import notificationApi from '../middleware/notification/api';

const requestNotifications = () => ({
  type: types.REQUEST_NOTIFICATION_DATA
});

const receiveNotifications = (classesData) => (
  {
    type: types.RECEIVE_NOTIFICATION_DATA,
    data: classesData
  });

const receiveNotificationsError = (error) => (
  {
    type: types.RECEIVE_NOTIFICATION_DATA_ERROR,
    data: error
  });

const requestPostNotifications = () => ({
  type: types.REQUEST_SENDING_NEW_NOTICATION
});

const receivePostNotifications = (classesData) => (
  {
    type: types.RECEIVE_SENDING_NEW_NOTICATION,
    data: classesData
  });

const receivePostNotificationsError = (error) => (
  {
    type: types.RECEIVE_SENDING_NEW_NOTICATION_ERROR,
    data: error
  });

const resetNewNotificationData = () => (
  {
    type: types.RESET_NEW_NOTIFICATIONS
  });

export function getNotifications() {
  return function (dispatch) {
    dispatch(requestNotifications());
    return notificationApi.getNotifications().then((response) => {
      dispatch(receiveNotifications(response));
    }).catch((error) => {
      dispatch(receiveNotificationsError({
        error: error
      }));
    });
  };
}

export function postNotifications(message) {
  return function (dispatch) {
    dispatch(requestPostNotifications());
    return notificationApi.sendNotification(message).then((response) => {
      dispatch(receivePostNotifications(response));
    }).catch((error) => {
      dispatch(receivePostNotificationsError({
        error: error
      }));
    });
  };
}

export function resetNewNotifications() {
  return function (dispatch) {
    dispatch(resetNewNotificationData());
  };
}