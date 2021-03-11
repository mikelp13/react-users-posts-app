import axios from "axios";
import usersActions from "./usersActions";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";


const getUsersOperation = () => async (dispatch) => {
  dispatch(usersActions.getUsersRequest());

      try {
          const response = await axios.get("/users");
          dispatch(usersActions.getUsersSuccess(response.data));
      } catch (error) {
          dispatch(usersActions.getUsersError(error.message));
      }
  
};

export {getUsersOperation};