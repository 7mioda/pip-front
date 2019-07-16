import * as types from './types';

export const setAllSellers = (payload) => ({
  type: types.ALL_SELLERS,
  payload,
});

export const getAllSellers = () => ({
  type: types.API,
  payload: {
    url: '/users',
    method: 'get',
    success: (data) => setAllSellers(data),
    meta: {
      namespace: 'sellers',
      check: true,
    },
  },
});
