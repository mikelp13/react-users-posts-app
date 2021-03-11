import { configureStore } from "@reduxjs/toolkit";
import users from "./users/usersReducers";
import posts from "./posts/postsReducers";
import loadingReducer from "./loading/loadingReducer";


const store = configureStore({
  reducer: {
    users,
    posts,
    loading:loadingReducer,
  }
});

export default store;