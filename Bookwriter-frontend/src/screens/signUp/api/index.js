import axios from "../../../api";

export const addNewUser = async (newUser) => {
  try {
    const response = await axios.post("/user", newUser);
    return response;
  } catch (error) {
    return error;
  }
};
