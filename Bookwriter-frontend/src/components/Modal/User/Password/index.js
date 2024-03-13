import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { validateForm } from "../../../../utils/utils";
import Design from "./design";
import { validationRules } from "./validator/rules";
import { updateUser } from "../../../../api/user";
import { showToast } from "../../../../helper/tosat";
import { UNABLE_TO_CONTINUE } from "../../../../utils/messages";

function UpdatePassword({ updatePassword, setUpdatePassword }) {
  const user = useSelector((state) => state.user.user);

  const token = useSelector((state) => state.auth.token);

  const [userData, setUserData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const toggleModal = () => setUpdatePassword(!updatePassword);

  const dispatch = useDispatch();

  const isDisabled = (updatedUser) => {
    return (
      updatedUser.currentPassword === "" ||
      updatedUser.password === "" ||
      updatedUser.confirmPassword === ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(userData, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        current_password: userData.currentPassword,
        updated_password: userData.password,
      };
      dispatch(updateUser(payload, token, user._id))
        .then((response) => {
          if (!response.data.success) {
            setErrors({
              currentPassword: response.data.message,
            });
          } else {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
            setUpdatePassword(!updatePassword);
            setErrors({});
          }
        })
        .catch(() => {
          showToast(UNABLE_TO_CONTINUE, "error");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Design
      updatePassword={updatePassword}
      toggleModal={toggleModal}
      userData={userData}
      setUserData={setUserData}
      errors={errors}
      handleSubmit={handleSubmit}
      isDisabled={isDisabled}
      setErrors={setErrors}
    />
  );
}

export default UpdatePassword;
