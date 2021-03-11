import { createAction } from '@reduxjs/toolkit';

const getUsersRequest = createAction('users/getUsersRequest');
const getUsersSuccess = createAction('users/getUsersSuccess');
const getUsersError = createAction('users/getUsersError');


const usersActions = {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,

};

export default usersActions;