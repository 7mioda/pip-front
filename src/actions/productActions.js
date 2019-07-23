import * as types from './types';
import route from './routeActions';

export const setAllProducts = (payload) => ({
  type: types.ALL_PRODUCTS,
  payload,
});

export const getAllProducts = () => ({
  type: types.API,
  payload: {
    url: '/products',
    method: 'get',
    success: (data) => setAllProducts(data),
    meta: {
      namespace: 'products',
      check: true,
    },
  },
});

export const setNewProduct = (product) => ({
  type: types.ADD_PRODUCT,
  payload: product,
});

export const addProduct = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'products/new',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (product) => setNewProduct(product),
    error: (error) => alert(error)
  },
});

export const unsetProduct = (product) => ({
  type: types.REMOVE_PRODUCT,
  payload: product,
});

export const removeProduct = (product) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/products/delete/${product}`,
    success: () => unsetProduct(product),
  },
});

export const setUpdatedProduct = (product) => ({
  type: types.UPDATE_PRODUCT,
  payload: product,
});

export const updateProduct = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: `/products/edit/${data.id}`,
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (product) => setUpdatedProduct(product),
  },
});
