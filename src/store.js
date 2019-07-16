import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import authReducer from './reducers/authReducer';
import uiReducer from './reducers/uiReducer';
import logger from './middlewares/logger';
import form from './middlewares/forms';
import api from './middlewares/api';
import auth from './middlewares/auth';
import apiCallEnhancer from './middlewares/apiCallEnhancer';
import routeMiddleware from './middlewares/router';
import productsReducer from './reducers/productReducer';
import categoriesReducer from './reducers/categoryReducer';
import flashSalesReducer from './reducers/flashSaleReducer';
import sellerReducer from './reducers/sellerReducer';

// Defining redux middleware
const middleware = [logger, auth, form, apiCallEnhancer, api, routeMiddleware];

// Creating app store
const store = createStore(
  combineReducers({
    ui: uiReducer,
    auth: authReducer,
    products: productsReducer,
    categories: categoriesReducer,
    flashSales: flashSalesReducer,
    sellers: sellerReducer,
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
