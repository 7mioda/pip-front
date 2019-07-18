import * as types from './types';

export const setAllProducts = (payload) => ({
  type: types.ALL_PRODUCTS,
  payload,
});

export const addProduct = (product) => ({
  type: types.ADD_CART_PRODUCT,
  payload: product,
});

export const removeProduct = (product) => ({
  type: types.REMOVE_CART_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: types.UPDATE_CART_PRODUCT,
  payload: product,
});
