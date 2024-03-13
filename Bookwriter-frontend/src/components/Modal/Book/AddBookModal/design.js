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
  showAddBookModal,
  toggleModal,
  bookData,
  setBookData,
  errors,
  handleSubmit,
  isDisabled,
  handleImageChange,
  imagePreview,
}) => {
  const { modal, icons, divider, boxForm, imageTag } = styles;

  return (
    <Modal open={showAddBookModal} onClose={toggleModal} sx={modal}>
      <Slide in={showAddBookModal} timeout={500}>
        <Box
          position="relative"
          min-width="300px"
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
            <Typography variant="h5">Add new Book</Typography>
            <CloseIcon fontSize="medium" sx={icons} onClick={toggleModal} />
          </Box>
          <Divider sx={divider} />
          <Box component="form" noValidate sx={boxForm} p={2}>
            <TextField
              multiline
              margin="normal"
              required
              fullWidth
              id="title"
              label="Book title"
              name="title"
              onChange={(e) => {
                handleChange(e, bookData, setBookData);
              }}
              autoFocus
              error={errors.title ? true : false}
              helperText={errors.title}
              value={bookData.title}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              multiline
              margin="normal"
              required
              fullWidth
              name="description"
              label="Book description"
              id="description"
              onChange={(e) => {
                handleChange(e, bookData, setBookData);
              }}
              error={errors.description ? true : false}
              helperText={errors.description}
              value={bookData.description}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type="file"
              accept="image/*"
              margin="normal"
              required
              fullWidth
              name="upload-photo"
              label="Upload Image"
              id="upload-photo"
              onChange={handleImageChange}
              error={errors.image ? true : false}
              helperText={errors.image}
              InputLabelProps={{ shrink: true }}
            />

            {imagePreview && (
              <img src={imagePreview} alt="Selected pic" style={imageTag} />
            )}
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
              disabled={isDisabled(bookData)}
            >
              ADD BOOK
            </Button>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
};

export default Design;
