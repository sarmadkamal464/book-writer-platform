// SignIn/design.js
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styles } from "./style";
import { handleChange, handle3rdPartyIntegration } from "../../helper/function";
import {
  googleClientId,
  facebookAppId,
  googleScope,
  linkedInClientId,
  linkedInClientSecretId,
  redirectUri,
  linkedInScope,
  gitHubClientId,
  gitHubClientSecretId,
} from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../helper/tosat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={boxContainer}>
        <BookLogo />
        <Typography
          component="h1"
          variant="h5"
          sx={title}
          data-testid="heading"
        >
          Book Writer
        </Typography>

        <Typography component="h1" variant="h5" data-testid="title">
          Sign In
        </Typography>
        <Grid container justifyContent={"center"}>
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
                var decoded = jwt_decode(response.data.id_token);
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
            id="email"
            label="Email Address"
            name="email"
            onChange={(e) => {
              handleChange(e, userData, setUserData);
            }}
            autoFocus
            error={errors?.email ? true : false}
            helperText={errors?.email}
            value={userData?.email}
            InputLabelProps={{ shrink: true }}
            data-testid="email"
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
            error={errors?.password ? true : false}
            helperText={errors?.password}
            value={userData?.password}
            InputLabelProps={{ shrink: true }}
            data-testid="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={button}
            data-testid="button"
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to={"/signup"} variant="body2">
                Don't have an account?
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
