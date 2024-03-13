import axios from "../../../api";
import { booksActions } from "../../../Redux/store/bookSlice";
import { writerRoleActions } from "../../../Redux/store/writerRoleSlice";

export const getBooks = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/book", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(booksActions.setBooks(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};

export const addBook = (payload, token) => async (dispatch) => {
  try {
    const response = await axios.post(`/book`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.bookPayload?.success) {
      dispatch(booksActions.addBook(response.data.bookPayload.payload));
      dispatch(
        writerRoleActions.addWriterRoles(
          response.data.writerRolePayload.payload
        )
      );
    }
    return response;
  } catch (error) {
    return error;
  }
};

export const getWriterRoles = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/writer-role", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(writerRoleActions.setWriterRoles(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
export const createWriterRole = (token, payload) => async (dispatch) => {
  try {
    const response = await axios.post("/writer-role", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success)
      dispatch(writerRoleActions.addWriterRoles(response.data.payload));
    return response;
  } catch (error) {
    return error;
  }
};
