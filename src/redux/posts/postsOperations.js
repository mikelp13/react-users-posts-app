import axios from "axios";
import postsActions from "./postsActions";

const getPostsOperation = (id) => async (dispatch) => {
  dispatch(postsActions.getPostsRequest());
  let requestURL = "";
  id ? (requestURL = `/posts?userId=${id}`) : (requestURL = "/posts");

  try {
    const response = await axios.get(requestURL);
    dispatch(postsActions.getPostsSuccess(response.data));
  } catch (error) {
    dispatch(postsActions.getPostsError(error.message));
  }
};

const addPostOperation = (post, userId) => async (dispatch) => {
  dispatch(postsActions.addPostRequest());
  try {
    const response = await axios.post("/posts", { ...post, userId });
    dispatch(postsActions.addPostSuccess(response.data));
  } catch (error) {
    dispatch(postsActions.addPostError(error.message));
  }
};

const getPostInfoOperation = (id) => async (dispatch) => {
  dispatch(postsActions.getPostInfoRequest());

  try {
    const response = await axios.get(`/comments?postId=${id}`);
    dispatch(postsActions.getPostInfoSuccess(response.data));
  } catch (error) {
    dispatch(postsActions.getPostInfoError(error.message));
  }
};

const editPostOperation = (postId, comment) => async (dispatch) => {
  dispatch(postsActions.editPostRequest());

  try {
    const response = await axios.put(`/posts/${postId}`, comment);
    dispatch(postsActions.editPostSuccess(response.data));
  } catch (error) {
    dispatch(postsActions.editPostError(error.message));
  }
};

const removePostOperation = (postId) => async (dispatch) => {
  dispatch(postsActions.removePostRequest());

  try {
    await axios.delete(`/posts/${postId}`);
    dispatch(postsActions.removePostSuccess(postId));
  } catch (error) {
    dispatch(postsActions.removePostError(error.message));
  }
};

export {
  getPostsOperation,
  addPostOperation,
  getPostInfoOperation,
  editPostOperation,
  removePostOperation,
};
