import cookie from 'react-cookies';
import * as actions from '../actions/types';
import api from '../api/api';
import { dataFetching, openModal } from '../actions/uiActions';

// Manages all server requests
const apiMiddleware = ({ dispatch }) => next => async action => {
  if (action.type === actions.AUTH) {
    dispatch(openModal('none'));
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
      method,
      url,
      data,
      headers: { Authorization: token },
    });
    dispatch(dataFetching());
    dispatch(success(result));
  } catch (error) {
    if (errorAction) {
      dispatch(errorAction());
    }
    dispatch(dataFetching());
  }
  return next(action);
};

export default apiMiddleware;
