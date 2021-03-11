import { createReducer } from "@reduxjs/toolkit";
import postsActions from "./postsActions";

const initialState = {
  allPosts: [],
  postInfo: [],
  currentPostId: "",
  userPostId: "",
};
const posts = createReducer(initialState, {
  [postsActions.getPostsSuccess]: (state, action) => ({
    ...state,
    allPosts: action.payload,
  }),
  [postsActions.addPostSuccess]: (state, action) => ({
    ...state,
    allPosts: [...state.allPosts, action.payload],
  }),

  [postsActions.getPostInfoSuccess]: (state, action) => ({
    ...state,
    postInfo: action.payload,
  }),
  [postsActions.getCurrentPostInfoId]: (state, action) => ({
    ...state,
    currentPostId: action.payload,
  }),

  [postsActions.getUserPostId]: (state, action) => ({
    ...state,
    userPostId: action.payload,
  }),

  [postsActions.editPostSuccess]: (state, { payload }) => {
    return {
      ...state,
      postInfo: [
        ...state.postInfo.map((item) =>
          item.id === payload.id ? { ...payload } : item
        ),
      ],
    };
  },

  [postsActions.removePostSuccess]: (state, { payload }) => {
       return {
      ...state,
      postInfo: [...state.postInfo.filter((item) => item.id !== Number(payload))],
    };
  },
});

export default posts;
