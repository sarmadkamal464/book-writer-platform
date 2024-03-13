import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Design from "./design";
import { useLocation } from "react-router";
import { authActions } from "../../Redux/store/authSlice";
import { getUser } from "./api";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const updateIsDrawer = () => {
    setIsDrawer(window.innerWidth < 480);
  };

  const handleLogout = () => {
    dispatch(authActions.Logout());
  };

  const isSelected = (pagePath) => {
    return location.pathname === pagePath;
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(false);

  const openModal = () => {
    setAnchorEl(null);
    setShow(true);
  };

  const [updatePassword, setUpdatePassword] = useState(false);

  const openUpdatePassword = () => {
    setAnchorEl(null);
    setUpdatePassword(true);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsDrawer);
    updateIsDrawer();
    return () => {
      window.removeEventListener("resize", updateIsDrawer);
    };
  }, []);

  useEffect(() => {
    if (!Object.keys(user).length) {
      dispatch(getUser(token));
    }
  }, [dispatch, token, user]);

  return (
    <Design
      mobileOpen={mobileOpen}
      isDrawer={isDrawer}
      handleDrawerToggle={handleDrawerToggle}
      user={user}
      handleLogout={handleLogout}
      isSelected={isSelected}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      openModal={openModal}
      show={show}
      setShow={setShow}
      openMenu={openMenu}
      updatePassword={updatePassword}
      setUpdatePassword={setUpdatePassword}
      openUpdatePassword={openUpdatePassword}
    />
  );
}

export default Navbar;
