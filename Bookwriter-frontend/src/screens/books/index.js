import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../components/Navbar/api";
import { getBooks, getWriterRoles } from "./api";
import Design from "./design";
import { CARDS_PER_PAGE } from "../../utils/constant";

const Books = () => {
  const user = useSelector((state) => state.user.user);

  const token = useSelector((state) => state.auth.token);

  const books = useSelector((state) => state.books.books);

  const writerRoles = useSelector((state) => state.writerRoles.writerRoles);

  const dispatch = useDispatch();

  const [bookloading, setBookloading] = useState(false);
  const [userloading, setUserloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [userBooks, setUserBooks] = useState([]);
  const [userBooksAsAuthor, setUserBooksAsAuthor] = useState([]);
  const [userBooksAsCollaborator, setUserBooksAsCollaborator] = useState([]);

  const cardsPerPage = CARDS_PER_PAGE;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Filter books based on the search query
  const filteredBooks = userBooks.filter((book) =>
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

  const [activeTab, setActiveTab] = useState("My books");

  const handleTabType = (event, newValue) => {
    setActiveTab(newValue);
  };

  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const handleAddBook = () => {
    setShowAddBookModal(true);
  };

  useEffect(() => {
    //Filter this specific user writerRoles and then get only their book id as author
    const userBookIdsInWriterRoleAsAuthor = writerRoles
      .filter(
        (writerRole) =>
          writerRole.user_id === user._id && writerRole.role === "author"
      )
      .map((writerRole) => writerRole.book_id);

    //Filter this specific user writerRoles and then get only their book id as collaborator
    const userBookIdsInWriterRoleAsCollaborator = writerRoles
      .filter(
        (writerRole) =>
          writerRole.user_id === user._id && writerRole.role === "collaborator"
      )
      .map((writerRole) => writerRole.book_id);

    // Filter books based on the presence of book IDs in writer Role as author
    const userBooksAsAuthor = books.filter((book) =>
      userBookIdsInWriterRoleAsAuthor.includes(book._id)
    );

    // Filter books based on the presence of book IDs in writer Role as collaborator
    const userBooksAsCollaborator = books.filter((book) =>
      userBookIdsInWriterRoleAsCollaborator.includes(book._id)
    );

    setUserBooksAsAuthor(userBooksAsAuthor);
    setUserBooksAsCollaborator(userBooksAsCollaborator);
  }, [writerRoles, books, user._id]);

  useEffect(() => {
    if (activeTab === "My books") {
      setUserBooks(userBooksAsAuthor);
    }
    if (activeTab === "Coloaded books") {
      setUserBooks(userBooksAsCollaborator);
    }
  }, [activeTab, userBooksAsAuthor, userBooksAsCollaborator]);

  useEffect(() => {
    if (!books.length) {
      setBookloading(true);
      dispatch(getBooks(token)).then(() => {
        setBookloading(false);
      });
    }
  }, [books.length, dispatch, token]);

  useEffect(() => {
    if (!Object.keys(user).length) {
      setUserloading(true);
      dispatch(getUser(token)).then(() => {
        setUserloading(false);
      });
    }
  }, [dispatch, token, user]);

  useEffect(() => {
    if (!writerRoles.length) {
      dispatch(getWriterRoles(token)).then(() => {});
    }
  }, [writerRoles.length, dispatch, token]);

  return (
    <Design
      user={user}
      currentPage={currentPage}
      userBooksAsAuthor={userBooksAsAuthor}
      userBooksAsCollaborator={userBooksAsCollaborator}
      activeTab={activeTab}
      handleTabType={handleTabType}
      handleSearch={handleSearch}
      searchQuery={searchQuery}
      currentCards={currentCards}
      filteredBooks={filteredBooks}
      cardsPerPage={cardsPerPage}
      handlePageChange={handlePageChange}
      bookloading={bookloading}
      userloading={userloading}
      showAddBookModal={showAddBookModal}
      setShowAddBookModal={setShowAddBookModal}
      handleAddBook={handleAddBook}
    />
  );
};

export default Books;
