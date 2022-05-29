import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Overlay from "./../../UI/Overlay";
import { Box, Typography, Button } from "@mui/material";
import GlassyCard from "./../../UI/GlassyCard";
import { Paper } from "@mui/material";
import FormInput from "../../common/FormInput";
import useDashBoardForm from "./useDashBoardForm";
import FormSelector from "./../../common/FormSelector";
import FormRadio from "./../../common/FormRadio";
import AddUserButton from "./../AddUserButton/AddUserButton";

import closeIcon from "../../../assets/dashboard-list-assests/close-icon.png";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "1rem",
      padding: theme.spacing(2),
      minWidth: "25rem",
    },
    topSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& > h6": {
        fontWeight: "bold",
      },
      "& > img": {
        height: "1rem",
        cursor: "pointer",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: ".7rem",
    },
  });
});

const DashboardUserForm = () => {
  const classes = useStyles();

  const {
    formElements,
    handleClose,
    handleClear,
    handleAddUser,
    isAllValid,
    btnContent,
  } = useDashBoardForm();

  const {
    UI: { isOverlayVisible },
  } = useSelector((state) => state);

  return (
    <Overlay isVisible={isOverlayVisible}>
      <GlassyCard>
        <Paper className={classes.container}>
          <Box className={classes.topSection}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              USERS
            </Typography>
            <img onClick={handleClose} src={closeIcon} alt="close icon" />
          </Box>
          <Box className={classes.formContainer}>
            <FormInput {...formElements.name} />
            <FormInput {...formElements.email} />
            <FormSelector {...formElements.gender} />
            <FormRadio {...formElements.status} />
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <AddUserButton
              isForForm
              isDisabled={!isAllValid}
              onClick={handleAddUser}
            >
              {btnContent}
            </AddUserButton>
            <Button
              style={{
                color: "#aaa",
              }}
              onClick={handleClear}
            >
              CLEAR
            </Button>
          </Box>
        </Paper>
      </GlassyCard>
    </Overlay>
  );
};

export default DashboardUserForm;
