import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    allUsers: [],
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
    getAllUsers(state, action) {
      state.allUsers = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
