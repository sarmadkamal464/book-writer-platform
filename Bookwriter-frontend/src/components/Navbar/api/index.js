import axios from "../../../api";
import { userActions } from "../../../Redux/store/userSlice";

export const getUser = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(userActions.getUser(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
export const getAllUsers = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/user/get_all_users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(userActions.getAllUsers(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
