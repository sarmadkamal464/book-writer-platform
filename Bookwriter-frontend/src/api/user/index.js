import axios from "../index";
import { userActions } from "../../Redux/store/userSlice";
import { USER_UPDATED } from "../../utils/messages";

export const updateUser = (payload, token, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/user/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.success) {
      if (response.data.message === USER_UPDATED) {
        return response;
      }
      dispatch(userActions.getUser(response.data.payload));
    }
    return response;
  } catch (error) {
    return error;
  }
};
