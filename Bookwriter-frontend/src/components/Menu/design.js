import React from "react";
import { styles } from "./style";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";

function Design({
  user,
  anchorEl,
  handleClose,
  openModal,
  openMenu,
  openUpdatePassword,
}) {
  const { menuAfter, menuBefore, transformOrigin, anchorOrigin } = styles;
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openMenu}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: { menuAfter, "&:before": menuBefore },
      }}
      transformOrigin={transformOrigin}
      anchorOrigin={anchorOrigin}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        {`${user.first_name} ${user.last_name}`}
      </MenuItem>
      <Divider />
      <MenuItem onClick={openModal}>
        <ListItemIcon>
          <ManageAccountsIcon fontSize="small" />
        </ListItemIcon>
        Update user
      </MenuItem>
      <MenuItem onClick={openUpdatePassword}>
        <ListItemIcon>
          <PasswordIcon fontSize="small" />
        </ListItemIcon>
        Change password
      </MenuItem>
    </Menu>
  );
}

export default Design;
