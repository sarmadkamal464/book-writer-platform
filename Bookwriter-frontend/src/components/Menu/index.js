import React from "react";
import Design from "./design";
function UserMenu({
  user,
  anchorEl,
  handleClose,
  openModal,
  openMenu,
  openUpdatePassword,
}) {
  return (
    <Design
      user={user}
      anchorEl={anchorEl}
      handleClose={handleClose}
      openModal={openModal}
      openMenu={openMenu}
      openUpdatePassword={openUpdatePassword}
    />
  );
}

export default UserMenu;
