// SignUp/index.js
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Design from "./design";
import { getBooks } from "../books/api";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const token = useSelector((state) => state.auth.token);

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks(token)).then(() => {});
    }
  }, [books.length, dispatch, token]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Filter books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentCards = filteredBooks.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div>
      <Design
        currentPage={currentPage}
        searchQuery={searchQuery}
        currentCards={currentCards}
        filteredBooks={filteredBooks}
        cardsPerPage={cardsPerPage}
        handlePageChange={handlePageChange}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default Home;
