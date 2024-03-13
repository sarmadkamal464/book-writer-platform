// 404Page/design.js
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import errorPage from "../../asset/error-404.png";
import { Link } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { styles } from "./style";

function Design() {
  const { boxContainerMain, boxContainer, img, box, typography, button } =
    styles;
  return (
    <>
      <Box component="main" style={boxContainerMain}>
        <Container maxWidth="md">
          <Box style={boxContainer}>
            <Box sx={box}>
              <img alt="Under development" src={errorPage} style={img} />
            </Box>
            <Typography align="center" sx={typography} variant="h3">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography align="center" color="text.secondary" variant="body1">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Button
              component={Link}
              to={"/"}
              startIcon={
                <SvgIcon fontSize="small">
                  <ArrowCircleLeftIcon />
                </SvgIcon>
              }
              sx={button}
              variant="contained"
            >
              Go back to Home page
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Design;
