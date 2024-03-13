import { createSlice } from "@reduxjs/toolkit";
const writerRoleSlice = createSlice({
  name: "writerRoles",
  initialState: {
    writerRoles: [],
  },
  reducers: {
    setWriterRoles(state, action) {
      state.writerRoles = action.payload;
    },
    addWriterRoles(state, action) {
      state.writerRoles = [...state.writerRoles, action.payload];
    },
  },
});
export const writerRoleActions = writerRoleSlice.actions;
export default writerRoleSlice;
