import * as types from './types';

export const addNotification = (notification) => ({
  type: types.ADD_NOTIFICATION,
  payload: notification,
});
