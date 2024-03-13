// SignUp/index.js
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { addNewUser } from "./api";
import Design from "./design";
import { showToast } from "../../helper/tosat";
import { validateForm } from "../../utils/utils";
import { validationRules } from "./validator/rules";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(userData, validationRules);

    if (Object.keys(validationErrors).length === 0) {
      const payload = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        phone_no: userData.phoneNo,
        password: userData.password,
        confirm_password: userData.confirmPassword,
      };
      addNewUser(payload)
        .then((response) => {
          if (response.data.success) {
            showToast(
              response.data.message,
              response.data.success ? "success" : "error"
            );
            setUserData({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phoneNo: "",
              confirmPassword: "",
            });
            navigate("/signin");
          } else {
            setErrors(response.data.message.error);
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

export default SignUp;
