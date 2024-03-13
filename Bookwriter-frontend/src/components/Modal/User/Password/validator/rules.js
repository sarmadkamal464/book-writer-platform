import { PASSWORD_LENGTH, REQUIRED } from "../../../../../utils/messages";

export const validationRules = [
  {
    field: "currentPassword",
    regex: /.{8,}/,
    errorMessage: `Current password ${PASSWORD_LENGTH}`,
  },
  {
    field: "currentPassword",
    regex: /^.{1,}$/,
    errorMessage: `Current password ${REQUIRED}`,
  },
  {
    field: "password",
    regex: /.{8,}/,
    errorMessage: `New password ${PASSWORD_LENGTH}`,
  },
  {
    field: "password",
    regex: /^.{1,}$/,
    errorMessage: `New password ${REQUIRED}`,
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
