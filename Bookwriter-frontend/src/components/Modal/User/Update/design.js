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
  show,
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
    <Modal open={show} onClose={toggleModal} sx={modal}>
      <Slide in={show} timeout={500}>
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
            <Typography variant="h5">Update User</Typography>
            <CloseIcon fontSize="medium" sx={icons} onClick={toggleModal} />
          </Box>
          <Divider sx={divider} />
          <Box component="form" noValidate sx={boxForm} p={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              onChange={(e) => {
                handleChange(e, userData, setUserData);
                if (!isDisabled(userData, user)) setErrors({});
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
                if (!isDisabled(userData, user)) setErrors({});
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
                if (!isDisabled(userData, user)) setErrors({});
              }}
              error={errors.email ? true : false}
              helperText={errors?.email}
              value={userData.email}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="phoneNo"
              label="Phone number"
              name="phoneNo"
              onChange={(e) => {
                handleChange(e, userData, setUserData);
                if (!isDisabled(userData, user)) setErrors({});
              }}
              error={errors.phoneNo ? true : false}
              helperText={errors.phoneNo}
              value={userData.phoneNo}
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
