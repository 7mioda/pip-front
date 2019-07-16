import * as types from './types';

export const setAllCategories = (payload) => ({
  type: types.ALL_CATEGORIES,
  payload,
});

export const getAllCategories = () => ({
  type: types.API,
  payload: {
    url: '/categories',
    method: 'get',
    success: (data) => setAllCategories(data),
    meta: {
      namespace: 'categories',
      check: true,
    },
  },
});

export const setNewCategory = (category) => ({
  type: types.ADD_CATEGORY,
  payload: category,
});

export const addCategory = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: 'categories/new',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (data) => setNewCategory(data),
  },
});

export const unsetCategory = (category) => ({
  type: types.REMOVE_CATEGORY,
  payload: category,
});

export const removeCategory = (category) => ({
  type: types.API,
  payload: {
    method: 'delete',
    url: `/categories/delete/${category}`,
    success: () => unsetCategory(category),
  },
});

export const setUpdatedCategory = (category) => ({
  type: types.UPDATE_CATEGORY,
  payload: category,
});

export const updateCategory = (data) => ({
  type: types.API,
  payload: {
    method: 'post',
    url: `/categories/edit/${data.id}`,
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (category) => setUpdatedCategory(category),
  },
});
