import { createReducer } from "@reduxjs/toolkit";
import usersActions from "./usersActions";

const users = createReducer([], {
  [usersActions.getUsersSuccess]: (_, action) => [...action.payload],

});

export default users;