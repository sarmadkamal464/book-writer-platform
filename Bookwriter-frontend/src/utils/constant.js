export const validationRules = [
  {
    field: "firstName",
    regex: /^[A-Za-z]/,
    errorMessage: "First name must start with an alphabet.",
  },
  {
    field: "lastName",
    regex: /^[A-Za-z]/,
    errorMessage: "Last name must start with an alphabet.",
  },
  {
    field: "phoneNo",
    regex: /^\+?\d{0,3}-?\d{4,15}$/,
    errorMessage:
      "Invalid phone number format. Please use the format: +xx-xxxxxxxxxx",
  },
  {
    field: "email",
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    errorMessage: "Invalid email address.",
  },
  {
    field: "password",
    regex: /.{8,}/,
    errorMessage: "Password must be at least 8 characters long.",
  },
];

export const baseURL = process.env.REACT_APP_BASEURL;

export const googleClientId = process.env.REACT_APP_GOOGLECLIENTID;

export const facebookAppId = process.env.REACT_APP_FACEBOOKAPPID;

export const googleScope = "openid profile email";

export const linkedInClientId = process.env.REACT_APP_LINKEDINCLIENTID;

export const linkedInClientSecretId =
  process.env.REACT_APP_LINKEDINCLIENTSECRETID;

export const linkedInScope = "w_member_social profile openid email";

export const redirectUri = "http://localhost:3000/signup";

export const gitHubClientId = process.env.REACT_APP_GITHUBCLIENTID;

export const gitHubClientSecretId = process.env.REACT_APP_GITHUBCLIENTSECRETID;

export const CARDS_PER_PAGE = 6;
