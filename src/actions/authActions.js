import * as actions from './types';
import { openModal } from './uiActions';

export const subscribe = (data) => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'users/new',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (user) => authorise(user),
    error: (error) => openModal({ title: 'error', body: error }),
  },
});

export const authorise = (user) => ({
  type: actions.AUTH,
  payload: user,
});

export const setError = (error) => ({
  type: actions.ERROR,
  payload: error,
});

export const login = ({ data }) => ({
  type: actions.API,
  payload: {
    method: 'post',
    url: 'users/login',
    data,
    success: (user) => authorise(user),
    error: () => setError('vérifier votres paramètres'),
  },
});

export const logout = () => ({
  type: actions.LOGOUT,
  payload: {},
});
