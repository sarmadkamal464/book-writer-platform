import { render, screen, fireEvent } from "@testing-library/react";
import { validateForm } from "../utils/utils";
import { INVALID, PASSWORD_LENGTH, REQUIRED } from "../utils/messages";
import { validationRules } from "../screens/signIn/validator/rules";
import SignIn from "../screens/signIn/design";
import { BrowserRouter } from "react-router-dom";
import store from "../Redux/store";
import { Provider } from "react-redux";

const handleSubmit = jest.fn();
const setUserData = jest.fn();
const userData = {
  email: "",
  password: "",
};
const errors = {};

test("render", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn
          userData={userData}
          errors={errors}
          setUserData={setUserData}
          handleSubmit={handleSubmit}
        />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("heading")).toHaveTextContent(/Book Writer/);
  expect(screen.getByTestId("title")).toHaveTextContent(/Sign In/);

  const inputEmail = screen.getByTestId("email");
  expect(inputEmail).toBeInTheDocument();

  const inputPassword = screen.getByTestId("password");
  expect(inputPassword).toBeInTheDocument();

  expect(screen.getByTestId("signIn-button")).toHaveTextContent(/Sign In/);

  const field = screen.getByTestId("email");
  // fill out the form
  fireEvent.change(field, {
    target: { value: "talha786.156@gmail.com" },
  });

  fireEvent.change(screen.getByTestId("password"), {
    target: { value: "12345678" },
  });

  const loginAwait = screen.getByTestId("signIn-button");
  //await fireEvent.click(loginAwait);
});

test("empty input email and password test", () => {
  expect(
    validateForm({ email: "", password: "" }, validationRules)
  ).toStrictEqual({
    email: "E-mail " + REQUIRED,
    password: "Password " + REQUIRED,
  });
});

test("invalid email and empty password test", () => {
  expect(
    validateForm({ email: "talha786", password: "" }, validationRules)
  ).toStrictEqual({
    email: "E-mail " + INVALID,
    password: "Password " + REQUIRED,
  });
});

test("invalid input email and password test", () => {
  expect(
    validateForm({ email: "talha786", password: "123456" }, validationRules)
  ).toStrictEqual({
    email: "E-mail" + INVALID,
    password: "Password " + PASSWORD_LENGTH,
  });
});

test("valid input email and password test", () => {
  expect(
    validateForm(
      { email: "talha786.156@gmail.com", password: "12345678" },
      validationRules
    )
  ).toStrictEqual({});
});
