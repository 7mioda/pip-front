import * as types from './types';

export const setAllFlashSales = (payload) => ({
  type: types.ALL_FLASH_SALES,
  payload,
});

export const getAllFlashSales = () => ({
  type: types.API,
  payload: {
    url: '/flash-sales',
    method: 'get',
    success: (data) => setAllFlashSales(data),
    meta: {
      namespace: 'flashSales',
      check: true,
    },
  },
});

export const setNewFlashSale = (flashSale) => ({
  type: types.ADD_FLASH_SALE,
  payload: flashSale,
});

export const addFlashSale = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'flash-sales/new',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (data) => setNewFlashSale(data),
  },
});

export const unsetFlashSale = (flashSale) => ({
  type: types.REMOVE_CATEGORY,
  payload: flashSale,
});

export const removeFlashSale = (flashSale) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/flash-sales/delete/${flashSale}`,
    success: () => unsetFlashSale(flashSale),
  },
});

export const setUpdatedFlashSale = (flashSale) => ({
  type: types.UPDATE_FLASH_SALE,
  payload: flashSale,
});

export const updateFlashSale = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: `/flash-sales/edit/${data.id}`,
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (flashSale) => setUpdatedFlashSale(flashSale),
  },
});
