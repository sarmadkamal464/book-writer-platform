// SignUp/styles.js
export const styles = {
  drawerDiv: {
    backgroundColor: "inherit",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: "auto",
    height: "70px",
  },
  box: {
    position: "absolute",
    bottom: "0",
    left: "0",
  },
  iconButton: {
    display: { xs: "block", md: "none" },
    marginRight: "10px",
  },
  navbarBox: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  listItemButton: (isSelected, path) => ({
    textAlign: "center",
    textDecoration: isSelected(path) ? "underline" : "none",
  }),
  boxLogout: {
    marginTop: "auto",
  },
  avatarIconButton: { p: 3 },
  appBar: { backgroundColor: "#EEEEEE" },
  drawerButtons: (isSelected, path) => ({
    color: "black",
    textDecoration: isSelected(path) ? "underline" : "none",
  }),
  boxOfLeftMargin: {
    marginLeft: "auto",
  },
  logoutButton: {
    color: "black",
  },
  divider: {
    my: 1,
  },
  menuAfter: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
  },
  menuBefore: {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
};
