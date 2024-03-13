import {
  FIRST_CHARACTER,
  INVALID,
  LENGHT_OF_NAME,
  PASSWORD_LENGTH,
  PHONE_FORMAT,
  REQUIRED,
  VALID_NAME,
} from "../../../utils/messages";

export const validationRules = [
  {
    field: "firstName",
    regex: /^[A-Za-z][A-Za-z0-9' -]{2,}$/,
    errorMessage: `Last ${VALID_NAME}`,
  },
  {
    field: "firstName",
    regex: /^.{3,}$/,
    errorMessage: `Last ${LENGHT_OF_NAME}`,
  },
  {
    field: "firstName",
    regex: /^[A-Za-z]{1,}[A-Za-z0-9' -]{0,}$/,
    errorMessage: `Last ${FIRST_CHARACTER}`,
  },
  {
    field: "firstName",
    regex: /^.{1,}$/,
    errorMessage: `First name ${REQUIRED}`,
  },
  {
    field: "lastName",
    regex: /^[A-Za-z][A-Za-z0-9' -]{2,}$/,
    errorMessage: `Last ${VALID_NAME}`,
  },
  {
    field: "lastName",
    regex: /^.{3,}$/,
    errorMessage: `Last ${LENGHT_OF_NAME}`,
  },
  {
    field: "lastName",
    regex: /^[A-Za-z]{1,}[A-Za-z0-9' -]{0,}$/,
    errorMessage: `Last ${FIRST_CHARACTER}`,
  },
  {
    field: "lastName",
    regex: /^.{1,}$/,
    errorMessage: `Last name ${REQUIRED}`,
  },
  {
    field: "phoneNo",
    regex: /^\+\d{2}-\d{10}$/,
    errorMessage: PHONE_FORMAT,
  },
  {
    field: "phoneNo",
    regex: /^.{1,}$/,
    errorMessage: `Phone number ${REQUIRED}`,
  },
  {
    field: "email",
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    errorMessage: `E-mail ${INVALID}`,
  },
  {
    field: "email",
    regex: /^.{1,}$/,
    errorMessage: `E-mail ${REQUIRED}`,
  },
  {
    field: "password",
    regex: /.{8,}/,
    errorMessage: `Password ${PASSWORD_LENGTH}`,
  },
  {
    field: "password",
    regex: /^.{1,}$/,
    errorMessage: `Password ${REQUIRED}`,
  },
  {
    field: "confirmPassword",
    regex: /.{8,}/,
    errorMessage: `Confirm password ${PASSWORD_LENGTH}`,
  },
  {
    field: "confirmPassword",
    regex: /^.{1,}$/,
    errorMessage: `Confirm password ${REQUIRED}`,
  },
];
