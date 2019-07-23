import cookie from 'react-cookies';
import * as actions from '../actions/types';
import api from '../api/api';
import { dataFetching, openModal } from '../actions/uiActions';
import route from "../actions/routeActions";

// Manages all server requests
const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type === actions.AUTH) {
    localStorage.setItem('id', action.payload.id);
    dispatch(openModal('none'));
    if(action.payload.roles.includes("SELLER")){
      setTimeout(() =>  dispatch(route('/plantify.it/admin-seller/')), 1000);
    }
    return next(action);
  }
  if (action.type !== actions.API) {
    return next(action);
  }
  const token = cookie.load('token');
  const {
    url,
    method,
    success,
    error: errorAction = () => null,
    data = null,
  } = action.payload;
  dispatch(dataFetching());
  try {
    const { data: result } = await api({
      contentType: 'application/json; charset=utf-8',
      method,
      url,
      data,
      headers: { Authorization: token },
    });
    dispatch(dataFetching());
    dispatch(success(result));
  } catch (error) {
    dispatch(dataFetching());
    if (errorAction) {
      dispatch(errorAction());
    }
  }
  return next(action);
};

export default apiMiddleware;
