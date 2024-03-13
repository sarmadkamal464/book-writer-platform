import { createSlice } from "@reduxjs/toolkit";
const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    addBook(state, action) {
      state.books = [...state.books, action.payload];
    },
  },
});
export const booksActions = bookSlice.actions;
export default bookSlice;
