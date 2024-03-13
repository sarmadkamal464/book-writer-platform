import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateForm } from "../../../../utils/utils";
import Design from "./design";
import { validationRules } from "./validator/rules";
import { showToast } from "../../../../helper/tosat";
import { UNABLE_TO_CONTINUE } from "../../../../utils/messages";
import { addBook } from "../../../../screens/books/api";

function AddBookModal({ showAddBookModal, setShowAddBookModal }) {
  const token = useSelector((state) => state.auth.token);

  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const toggleModal = () => setShowAddBookModal(!showAddBookModal);

  const [imagePreview, setImagePreview] = useState(""); // State for image preview

  const dispatch = useDispatch();

  const isDisabled = () => {
    return (
      bookData.title === "" &&
      bookData.description === "" &&
      bookData.image === ""
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setBookData({ ...bookData, image: e.target.result }); // Store the selected image in the state
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(bookData, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(addBook(bookData, token))
        .then((response) => {
          if (response?.data?.bookPayload?.success) {
            showToast(
              response.data.bookPayload.message,
              response.data.bookPayload.success ? "success" : "error"
            );
            setShowAddBookModal(!showAddBookModal);
          } else {
            setErrors(response.data.message.error);
          }
        })
        .catch((error) => {
          showToast(UNABLE_TO_CONTINUE, "error");
          console.log(error);
        });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Design
      showAddBookModal={showAddBookModal}
      toggleModal={toggleModal}
      bookData={bookData}
      setBookData={setBookData}
      errors={errors}
      handleSubmit={handleSubmit}
      isDisabled={isDisabled}
      handleImageChange={handleImageChange}
      imagePreview={imagePreview}
    />
  );
}

export default AddBookModal;
