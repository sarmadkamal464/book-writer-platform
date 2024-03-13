import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { styles } from "./style";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import UpdateUser from "../Modal/User/Update";
import { ToastContainer } from "react-toastify";
import UpdatePassword from "../Modal/User/Password";
import UserMenu from "../Menu";

const pages = [
  { label: "Home", path: "/" },
  { label: "Books", path: "/books" },
];

function Design({
  mobileOpen,
  isDrawer,
  handleDrawerToggle,
  user,
  handleLogout,
  isSelected,
  anchorEl,
  handleClick,
  handleClose,
  openModal,
  show,
  setShow,
  openMenu,
  updatePassword,
  setUpdatePassword,
  openUpdatePassword,
}) {
  const {
    drawerDiv,
    box,
    iconButton,
    navbarBox,
    img,
    listItemButton,
    boxLogout,
    avatarIconButton,
    appBar,
    drawerButtons,
    boxOfLeftMargin,
    logoutButton,
    divider,
  } = styles;

  const drawer = (
    <Box sx={drawerDiv}>
      <Box>
        <Link to="/" onClick={handleDrawerToggle}>
          <img src={logo} alt="Logo" style={img} />
        </Link>
        <Divider sx={divider} />
        <List>
          {pages.map((page) => (
            <ListItem key={page.label} disablePadding>
              <ListItemButton
                component={Link}
                to={page.path}
                onClick={handleDrawerToggle}
                sx={listItemButton(isSelected, page.path)}
              >
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          box,
        }}
      >
        <Box sx={boxLogout}>
          <Button onClick={handleLogout} fullWidth>
            Logout
          </Button>
        </Box>
        <Tooltip title={`${user.first_name} ${user.last_name}`}>
          <IconButton sx={avatarIconButton} onClick={handleClick}>
            <Avatar alt="Remy Sharp" src="" />
          </IconButton>
        </Tooltip>
        <UserMenu
          user={user}
          anchorEl={anchorEl}
          handleClose={handleClose}
          openModal={openModal}
          openMenu={openMenu}
          openUpdatePassword={openUpdatePassword}
        />
      </Box>
    </Box>
  );
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
      {/* App Bar */}
      <AppBar position="sticky" sx={appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isDrawer && (
              <IconButton
                color="black"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={iconButton}
              >
                <MenuIcon />
              </IconButton>
            )}
            {/* Conditionally render the logo */}
            {!isDrawer && (
              <Link to="/">
                <img src={logo} alt="Logo" style={img} />
              </Link>
            )}

            {/* Conditionally render navigation items based on isDrawer */}
            {isDrawer ? null : (
              <>
                <Box sx={navbarBox}>
                  {pages.map((page) => (
                    <Button
                      key={page.label}
                      component={Link}
                      to={page.path}
                      sx={drawerButtons(isSelected, page.path)}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Box>
                <Box sx={boxOfLeftMargin}>
                  {/* Add Logout button to the app bar */}
                  <Button onClick={handleLogout} sx={logoutButton}>
                    Logout
                  </Button>
                </Box>
              </>
            )}
            <Box sx={boxOfLeftMargin}>
              <Tooltip title={`${user.first_name} ${user.last_name}`}>
                <IconButton
                  sx={avatarIconButton}
                  onClick={handleClick}
                  aria-controls={openMenu ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                >
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
            </Box>
            <UserMenu
              user={user}
              anchorEl={anchorEl}
              handleClose={handleClose}
              openModal={openModal}
              openMenu={openMenu}
              openUpdatePassword={openUpdatePassword}
            />
          </Toolbar>
        </Container>
        <ToastContainer />
      </AppBar>
      {show && <UpdateUser show={show} setShow={setShow} />}
      {updatePassword && (
        <UpdatePassword
          updatePassword={updatePassword}
          setUpdatePassword={setUpdatePassword}
        />
      )}
    </>
  );
}

export default Design;
