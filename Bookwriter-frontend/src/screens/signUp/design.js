// SignUp/design.js
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styles } from "./style";
import { useTheme } from "@mui/material/styles";
import {
  facebookAppId,
  gitHubClientId,
  gitHubClientSecretId,
  googleClientId,
  googleScope,
  linkedInClientId,
  linkedInClientSecretId,
  linkedInScope,
  redirectUri,
} from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../helper/tosat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleChange, handle3rdPartyIntegration } from "../../helper/function";
import BookLogo from "../../components/BookLogo";
import {
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialGoogle,
  LoginSocialLinkedin,
} from "reactjs-social-login";
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import jwt_decode from "jwt-decode";
import { UNABLE_TO_CONTINUE } from "../../utils/messages";

function Design({ userData, setUserData, errors, handleSubmit }) {
  const { boxContainer, title, form, button } = styles;
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={boxContainer}>
        <BookLogo />
        <Typography component="h1" variant="h5" sx={title(theme)}>
          Book Writer
        </Typography>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid>
          <Grid item>
            <LoginSocialGoogle
              client_id={googleClientId}
              scope={googleScope}
              onResolve={(response) => {
                handle3rdPartyIntegration(
                  response.data,
                  dispatch,
                  response.provider
                );
              }}
              onReject={() => {
                showToast(UNABLE_TO_CONTINUE, "error");
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>
            <LoginSocialFacebook
              appId={facebookAppId}
              onResolve={(response) => {
                handle3rdPartyIntegration(
                  response.data,
                  dispatch,
                  response.provider
                );
              }}
              onReject={() => {
                showToast(UNABLE_TO_CONTINUE, "error");
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
            <LoginSocialLinkedin
              client_id={linkedInClientId}
              client_secret={linkedInClientSecretId}
              redirect_uri={redirectUri}
              scope={linkedInScope}
              onResolve={(response) => {
                const decoded = jwt_decode(response.data.id_token);
                handle3rdPartyIntegration(decoded, dispatch, response.provider);
              }}
              onReject={() => {
                showToast(UNABLE_TO_CONTINUE, "error");
              }}
            >
              <LinkedInLoginButton />
            </LoginSocialLinkedin>
            <LoginSocialGithub
              client_id={gitHubClientId}
              client_secret={gitHubClientSecretId}
              redirect_uri={redirectUri}
              onResolve={(response) => {
                handle3rdPartyIntegration(
                  response.data,
                  dispatch,
                  response.provider
                );
              }}
              onReject={() => {
                showToast(UNABLE_TO_CONTINUE, "error");
              }}
            >
              <GithubLoginButton />
            </LoginSocialGithub>
          </Grid>
        </Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            autoFocus
            error={errors.firstName ? true : false}
            helperText={errors.firstName}
            value={userData.firstName}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            id="lastName"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
            value={userData.lastName}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.email ? true : false}
            helperText={errors.email}
            value={userData.email}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNo"
            label="Phone number"
            name="phoneNo"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.phoneNo ? true : false}
            helperText={errors.phoneNo}
            value={userData.phoneNo}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.password ? true : false}
            helperText={errors.password}
            value={userData.password}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword}
            value={userData.confirmPassword}
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" fullWidth variant="contained" sx={button}>
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to={"/signin"} variant="body2">
                Already have an account?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default Design;
