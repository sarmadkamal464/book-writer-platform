import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import bookSlice from "./bookSlice";
import sectionsReducer from "./sectionsSlice";
import writerRoleSlice from "./writerRoleSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
    books: bookSlice.reducer,
    sections: sectionsReducer,
    writerRoles: writerRoleSlice.reducer,
  },
});
