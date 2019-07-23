import * as types from './types';

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

export const addDelivery = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'deliveries/new',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (delivery) => alert(delivery.id),
    error: (error) => alert(error)
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
