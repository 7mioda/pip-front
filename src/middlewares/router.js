import {
  ADD_FLASH_SALE,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  ROUTE,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  UPDATE_FLASH_SALE
} from '../actions/types';
import route from "../actions/routeActions";


//--------------------------------------------------------------------------------------
//                  Manages  routes
//---------------------------------------------------------------------------------------
const routeMiddleware = ({ dispatch, getState }) => next => async action => {
  if(action.type === ADD_PRODUCT){
    dispatch(route('/plantify.it/admin-seller/products'));
  }
  if(action.type === ADD_CATEGORY){
    dispatch(route('/plantify.it/admin-seller/categories'));
  }
  if(action.type === UPDATE_CATEGORY){
    dispatch(route('/plantify.it/admin-seller/categories'));
  }
  if(action.type === UPDATE_PRODUCT){
    dispatch(route('/plantify.it/admin-seller/products'))
  }
  if(action.type === ADD_FLASH_SALE){
    dispatch(route('/plantify.it/admin-seller/flash-sales'));
  }
  if(action.type === UPDATE_FLASH_SALE){
    dispatch(route('/plantify.it/admin-seller/flash-sales'));
  }
  if (action.type !== ROUTE) {
    return next(action);
  }

  getState().ui.history.push(action.payload);

};

export default routeMiddleware;
