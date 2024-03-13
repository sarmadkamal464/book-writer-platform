import React from "react";
import {
  Modal,
  Box,
  Typography,
  Slide,
  Divider,
  Button,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { handleChange } from "../../../../helper/function";
import { styles } from "./style";
const Design = ({
  updatePassword,
  toggleModal,
  userData,
  setUserData,
  errors,
  handleSubmit,
  isDisabled,
  user,
  setErrors,
}) => {
  const { modal, icons, divider, boxForm } = styles;
  return (
    <Modal open={updatePassword} onClose={toggleModal} sx={modal}>
      <Slide in={updatePassword} timeout={500}>
        <Box
          position="relative"
          width="500px"
          borderRadius="xl"
          backgroundColor="#eeeeee"
          shadow="xl"
        >
          <Box
            display="flex"
            alginitems="center"
            justifyContent="space-between"
            p={2}
          >
            <Typography variant="h5">Update Password</Typography>
            <CloseIcon fontSize="medium" sx={icons} onClick={toggleModal} />
          </Box>
          <Divider sx={divider} />
          <Box component="form" noValidate sx={boxForm} p={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Current Password"
              type="password"
              id="currentPassword"
              onChange={(e) => {
                handleChange(e, userData, setUserData);
              }}
              error={errors.currentPassword ? true : false}
              helperText={errors.currentPassword}
              value={userData.currentPassword}
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
          </Box>
          <Divider sx={divider} />
          <Box display="flex" justifyContent="space-between" p={1.5}>
            <Button variant="gradient" color="dark" onClick={toggleModal}>
              close
            </Button>
            <Button
              variant="gradient"
              color="info"
              onClick={handleSubmit}
              disabled={isDisabled(userData, user)}
            >
              save changes
            </Button>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

export default Design;
