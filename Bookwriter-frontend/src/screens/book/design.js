import React from "react";
import Section from "../../components/Section";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styles } from "./style.js";
import AddSectionModal from "../../components/Modal/SectionModal/AddSectionModal/index.js";
import { getFullDate } from "../../helper/function.js";

const Design = ({
  filterSections,
  handleAddMainSection,
  showAddSectionModal,
  setShowAddSectionModal,
  parentSectionID,
  setParentSectionID,
  book,
  writerRoleBook,
  allUsers,
  handleChangeCollaborator,
  collaborator,
}) => {
  const {
    mainContainer,
    mainContainerBook,
    bookTitle,
    bookAuthorDate,
    bookDescription,
    AddSectionButtonContainer,
  } = styles;
  return (
    <>
      {!book && (
        <Typography variant="h6" sx={bookTitle}>
          NO BOOK FOUND.
        </Typography>
      )}
      {book && (
        <>
          <Box sx={mainContainer}>
            <Box sx={mainContainerBook}>
              <Typography variant="h4" sx={bookTitle}>
                {book?.title ?? ""}
              </Typography>

              <Typography variant="h6" sx={bookAuthorDate}>
                {getFullDate(book?.createdAt, "LL")}
              </Typography>
              <Typography sx={bookDescription}>
                {book?.description ?? ""}
              </Typography>
            </Box>
            {writerRoleBook?.role === "author" && (
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-label">
                  Assign Collaborator
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={collaborator}
                  label="Assign Collaborator"
                  onChange={handleChangeCollaborator}
                >
                  {allUsers?.map((user, key) => (
                    <MenuItem key={user?._id} value={user}>
                      {user?.first_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <Box sx={AddSectionButtonContainer}>
              <Button
                variant={"contained"}
                onClick={handleAddMainSection}
                disabled={writerRoleBook?.role === "collaborator"}
              >
                Add Section
              </Button>
            </Box>
            {filterSections?.map((section) => (
              <Section
                key={section._id}
                section={section}
                setShowAddSectionModal={setShowAddSectionModal}
                setParentSectionID={setParentSectionID}
                writerRoleBook={writerRoleBook}
              />
            ))}
            {filterSections.length === 0 && (
              <Typography variant="h6" sx={bookTitle}>
                NO SECTION FOUND PLEASE ADD SECTION
              </Typography>
            )}
          </Box>

          {showAddSectionModal && (
            <AddSectionModal
              showAddSectionModal={showAddSectionModal}
              setShowAddSectionModal={setShowAddSectionModal}
              parentSectionID={parentSectionID}
            />
          )}
        </>
      )}
    </>
  );
};

export default Design;
