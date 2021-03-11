import { createAction } from '@reduxjs/toolkit';

export const getPostsRequest = createAction("posts/getPostsRequest");
export const getPostsSuccess = createAction("posts/getPostsSuccess");
export const getPostsError = createAction("posts/getPostsError");

export const addPostRequest = createAction("posts/addPostRequest");
export const addPostSuccess = createAction("posts/addPostSuccess");
export const addPostError = createAction("posts/addPostError");

export const getPostInfoRequest = createAction("posts/getPostInfoRequest");
export const getPostInfoSuccess = createAction("posts/getPostInfoSuccess");
export const getPostInfoError = createAction("posts/getPostInfoError");

export const editPostRequest = createAction("posts/editPostRequest");
export const editPostSuccess = createAction("posts/editPostSuccess");
export const editPostError = createAction("posts/editPostError");

export const removePostRequest = createAction("posts/removePostRequest");
export const removePostSuccess = createAction("posts/removePostSuccess");
export const removePostError = createAction("posts/removePostError");

export const getCurrentPostInfoId = createAction("posts/getCurrentPostInfoId");
export const getUserPostId = createAction("posts/getUserPostId");

const postsActions = {
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  getPostInfoRequest,
  getPostInfoSuccess,
  getPostInfoError,
  editPostRequest,
  editPostSuccess,
  editPostError,
  removePostRequest,
  removePostSuccess,
  removePostError,
  getCurrentPostInfoId,
  getUserPostId,
};

export default postsActions;