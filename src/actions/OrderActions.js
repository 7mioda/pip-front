import * as types from './types';
import route from './routeActions';

export const setAllDeliveries = (payload) => ({
  type: types.ALL_DELIVERIES,
  payload,
});

export const getAllDeliveries = () => ({
  type: types.API,
  payload: {
    url: '/deliveries',
    method: 'get',
    success: (data) => setAllDeliveries(data),
    meta: {
      namespace: 'products',
      check: true,
    },
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
    success: (result) => console.log('result neja7 5ouia',result) || route(`/plantify.it/client/submit-payment/${result.id}`),
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


export const setUpdatedDelivery = (delivery) => ({
  type: types.UPDATE_DELIVERY,
  payload: delivery,
});

export const updateDelivery = ({ id, status }) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: `/deliveries/${id}/change-status?status=${status}`,
    success: (delivery) => setUpdatedDelivery(delivery),
  },
});
