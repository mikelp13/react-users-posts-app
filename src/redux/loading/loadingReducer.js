import { createReducer } from '@reduxjs/toolkit';
import usersActions from '../users/usersActions';
import postsActions from '../posts/postsActions';

const loadingReducer = createReducer(false, {

  [usersActions.getUsersRequest]: () => true,
  [usersActions.getUsersSuccess]: () => false,
  [usersActions.getUsersError]: () => false,

  [postsActions.addPostRequest]: () => true,
  [postsActions.addPostSuccess]: () => false,
  [postsActions.addPostError]: () => false,

  [postsActions.getPostInfoRequest]: () => true,
  [postsActions.getPostInfoSuccess]: () => false,
  [postsActions.getPostInfoSError]: () => false,

});
export default loadingReducer