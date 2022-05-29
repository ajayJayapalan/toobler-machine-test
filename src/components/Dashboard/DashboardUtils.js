import { Box } from "@mui/material";
import StatusCircle from "./../UI/StatusCircle";
import { Typography } from "@mui/material";

import editIcon from "../../assets/dashboard-list-assests/edit-icon.png";
import deleteIcon from "../../assets/dashboard-list-assests/delete-icon.png";

export const UserStatusTableCell = ({ isActive = true }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <StatusCircle isActive={isActive} />
    <Typography>{isActive ? "Active" : "Inactive"}</Typography>
  </Box>
);

const ActionButton = ({ isEdit = false, children, ...restProps }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.3rem",
        cursor: "pointer",
      }}
      {...restProps}
    >
      <img
        style={{
          height: "1rem",
        }}
        src={isEdit ? editIcon : deleteIcon}
        alt={children}
      />
      <span>{children}</span>
    </Box>
  );
};

export const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: ".7rem",
      }}
    >
      <ActionButton onClick={onEdit} isEdit>
        {" "}
        edit
      </ActionButton>
      <ActionButton onClick={onDelete}> delete</ActionButton>
    </Box>
  );
};
