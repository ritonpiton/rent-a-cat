import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

function Icons({card, onCardEditClick, onCardDeleteClick}) {

  function handleEditClick() {
    onCardEditClick(card);
  }

  function handleDeleteClick() {
    onCardDeleteClick(card);
  }
  return (
    <div>
      <IconButton
        aria-label="delete"
        sx={{ position: "absolute", right: "15px", top: "15px" }}
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        aria-label="edit"
        sx={{ position: "absolute", right: "60px", top: "15px" }}
        onClick={handleEditClick}
      >
        <EditIcon />
      </IconButton>
    </div>
  );
}

export default Icons;