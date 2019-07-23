import * as types from './types';
import route from './routeActions';

export const setUpdatedPost = (data) => ({
  type: types.UPDATE_ORDER,
  payload: data,
});

export const setAllOrders = (payload) => ({
  type: types.ALL_ORDERS,
  payload,
});

export const getAllOrders = () => ({
  type: types.API,
  payload: {
    url: '/orders',
    method: 'get',
    success: (data) => setAllOrders(data),
  },
});

export const addOrder = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    'Content-Type': 'multipart/form-data',
    url: 'orders/new',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (result) => route(`/plantify.it/client/submit-payment/${result.id}`),
    error: (error) => console.log(error),
  },
});

export const submitPayment = (data) => ({
  type: types.API,
  payload: {
    method: 'get',
    url: `order/submit-payment/${data.id}?payment-token=${data.paymentToken}`,
    data,
    success: () => route(`/plantify.it/client/submit-delivery/${data.id}`),
    error: (error) => console.log(error),
  },
});

export const validateOrder = (data) => ({
  type: types.API,
  payload: {
    method: 'get',
    url: `order/validate-order/${data}`,
    success: (order) => setUpdatedPost(order),
    error: (error) => console.log(error),
  },
});
