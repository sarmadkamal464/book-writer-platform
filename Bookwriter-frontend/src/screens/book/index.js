import React, { useEffect, useMemo, useState } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "./api";
import { createWriterRole, getBooks, getWriterRoles } from "../books/api";
import { getAllUsers } from "../../components/Navbar/api";

function Book() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);
  const sections = useSelector((state) => state.sections.list);
  const user = useSelector((state) => state.user.user);
  const writerRolesBooks = useSelector(
    (state) => state.writerRoles.writerRoles
  );
  const allUsers = useSelector((state) => state.user.allUsers).filter(
    (myUser) => myUser._id !== user._id
  );

  const token = useSelector((state) => state.auth.token);

  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [parentSectionID, setParentSectionID] = useState(null);
  const [collaborator, setCollaborator] = useState("");

  const filterSections = useMemo(
    () =>
      sections.filter(
        (section) =>
          section.book_id === id && section.parent_section_id === null
      ),
    [sections, id]
  );

  const book = useMemo(
    () => books.find((book) => book._id === id),
    [books, id]
  );
  const writerRoleBook = useMemo(
    () =>
      writerRolesBooks.find(
        (writerRoleBook) =>
          writerRoleBook.book_id === id && writerRoleBook.user_id === user._id
      ),
    [writerRolesBooks, id, user._id]
  );

  const handleAddMainSection = () => {
    setShowAddSectionModal((prevState) => !prevState);
    setParentSectionID(null);
  };

  const handleChangeCollaborator = (event) => {
    setCollaborator(event.target.value);
    const payload = {
      book_id: id,
      user_id: event?.target?.value?._id,
      role: "collaborator",
    };
    dispatch(createWriterRole(token, payload));
  };

  useEffect(() => {
    if (!sections.length) {
      dispatch(getSections(token)).then(() => {});
    }
  }, [sections.length, dispatch, token]);

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks(token)).then(() => {});
    }
  }, [books.length, dispatch, token]);

  useEffect(() => {
    if (!writerRolesBooks.length) {
      dispatch(getWriterRoles(token)).then(() => {});
    }
  }, [writerRolesBooks.length, dispatch, token]);

  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getAllUsers(token)).then(() => {});
    }
  }, [allUsers.length, dispatch, token]);

  return (
    <Design
      filterSections={filterSections}
      handleAddMainSection={handleAddMainSection}
      showAddSectionModal={showAddSectionModal}
      setShowAddSectionModal={setShowAddSectionModal}
      parentSectionID={parentSectionID}
      setParentSectionID={setParentSectionID}
      book={book}
      writerRoleBook={writerRoleBook}
      allUsers={allUsers}
      handleChangeCollaborator={handleChangeCollaborator}
      collaborator={collaborator}
    />
  );
}

export default Book;
