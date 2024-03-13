// SignIn/index.js
import React, { useState } from "react";
import Design from "./design";
import "react-toastify/dist/ReactToastify.css";
import { login } from "./api";
import { showToast } from "../../helper/tosat";
import { useDispatch } from "react-redux";
import { validationRules } from "./validator/rules";
import { validateForm } from "../../utils/utils";

function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(userData, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        email: userData.email,
        password: userData.password,
      };

      dispatch(login(payload))
        .then((response) => {
          if (!response.data.success) {
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
    } else {
      // Validation failed, update the state with errors
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <Design
        userData={userData}
        setUserData={setUserData}
        errors={errors}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default SignIn;
