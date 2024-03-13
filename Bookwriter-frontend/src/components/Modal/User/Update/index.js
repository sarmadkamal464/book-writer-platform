import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { validateForm } from "../../../../utils/utils";
import { REQUIRED } from "../../../../utils/messages";
import Design from "./design";
import { validationRules } from "./validator/rules";
import { updateUser } from "../../../../api/user";
import { showToast } from "../../../../helper/tosat";

function UpdateUser({ show, setShow }) {
  const user = useSelector((state) => state.user.user);

  const token = useSelector((state) => state.auth.token);

  const [userData, setUserData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    phoneNo: user.phone_no || "",
    email: user.email,
  });

  const [errors, setErrors] = useState({});

  const toggleModal = () => setShow(!show);

  const dispatch = useDispatch();

  const isDisabled = (updatedUser, oldUser) => {
    return (
      updatedUser.firstName === oldUser.first_name &&
      updatedUser.lastName === oldUser.last_name &&
      updatedUser.email === oldUser.email &&
      (oldUser.phone_no
        ? updatedUser.phoneNo === oldUser.phone_no
        : updatedUser.phoneNo === "")
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(userData, validationRules);

    if (
      Object.keys(validationErrors).length === 0 ||
      (Object.keys(validationErrors).length === 1 &&
        validationErrors.phoneNo === `Phone number ${REQUIRED}` &&
        typeof user.phone_no === "undefined")
    ) {
      let payload = {};
      if (userData.phoneNo === "") {
        payload = {
          first_name: userData.firstName,
          last_name: userData.lastName,
          email: userData.email,
        };
      } else {
        payload = {
          first_name: userData.firstName,
          last_name: userData.lastName,
          email: userData.email,
          phone_no: userData.phoneNo,
        };
      }
      dispatch(updateUser(payload, token, user._id))
        .then((response) => {
          if (response.data.success) {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
          }
        })
        .catch((error) => {
          showToast("Unable to register, please try again!", "error");
        });
      setErrors({});
      setShow(!show);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Design
      show={show}
      toggleModal={toggleModal}
      userData={userData}
      user={user}
      setUserData={setUserData}
      errors={errors}
      handleSubmit={handleSubmit}
      isDisabled={isDisabled}
      setErrors={setErrors}
    />
  );
}

export default UpdateUser;
