import * as types from './types';

export const setAllPosts = (payload) => ({
  type: types.ALL_POSTS,
  payload,
});

export const getAllPosts = () => ({
  type: types.API,
  payload: {
    url: '/posts',
    method: 'get',
    success: (data) => setAllPosts(data),
    meta: {
      namespace: 'posts',
      check: true,
    },
  },
});

export const setUpdatedPost = (post) => ({
  type: types.UPDATE_POST,
  payload: post,
});

export const getUpdatedPost = (post) => ({
  type: types.API,
  payload: {
    url: `/posts/${post}`,
    method: 'get',
    success: (data) => setUpdatedPost(data),
  },
});

export const setNewPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});

export const addPost = (data) => ({
  type: types.API,
  payload: {
    url: '/posts/new',
    method: 'post',
    data,
    meta: {
      header: 'multipart/form-data',
    },
    success: (post) => setNewPost(post),
  },
});


export const addLike = (data) => ({
  type: types.API,
  payload: {
    url: '/likes/new',
    method: 'post',
    data,
    success: () => getUpdatedPost(data.post),
  },
});

export const deleteLike = (data) => ({
  type: types.API,
  payload: {
    url: `/likes/delete/${data.id}`,
    method: 'delete',
    success: () => getUpdatedPost(data.post),
  },
});

export const addComment = (data) => ({
  type: types.API,
  payload: {
    url: '/comments/new',
    method: 'post',
    data,
    success: () => getUpdatedPost(data.post),
  },
});

const unsetPost = (data) => ({
  type: types.DELETE_POST,
  payload: data,
});

export const deletePost = (data) => ({
  type: types.API,
  payload: {
    url: `/posts/delete/${data}`,
    method: 'delete',
    success: () => unsetPost(data),
  },
});

export const deleteComment = (data) => ({
  type: types.API,
  payload: {
    url: `/comments/delete/${data.id}`,
    method: 'delete',
    success: () => getUpdatedPost(data.post),
  },
});
