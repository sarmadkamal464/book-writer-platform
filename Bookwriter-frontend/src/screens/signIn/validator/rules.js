export const validationRules = [
  {
    field: "email",
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    errorMessage: "Invalid E-mail address.",
  },
  {
    field: "email",
    regex: /^.{1,}$/,
    errorMessage: "E-mail is required.",
  },
  {
    field: "password",
    regex: /.{8,}/,
    errorMessage: "Password must be at least 8 characters long.",
  },
  {
    field: "password",
    regex: /^.{1,}$/,
    errorMessage: "Password is required.",
  },
];
