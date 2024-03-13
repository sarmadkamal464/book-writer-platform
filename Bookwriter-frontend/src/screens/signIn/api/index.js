import axios from "../../../api";
import { getUser, getAllUsers } from "../../../components/Navbar/api";
import { authActions } from "../../../Redux/store/authSlice";

export const login = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("/login", payload);
    if (response.data.success) {
      dispatch(authActions.Login(response.data.payload));
      dispatch(getUser(response.data.payload.token));
      dispatch(getAllUsers(response.data.payload.token));
    }
    return response;
  } catch (error) {
    return error;
  }
};
