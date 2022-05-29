import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import addUserIcon from "../../../assets/dashboard-list-assests/user-add.png";
import hoverAddUserIcon from "../../../assets/dashboard-list-assests/hover-user-add.png";
import { useDispatch } from "react-redux";
import { openOverlay } from "../../../redux/actions/ui-actions";
import { createNewForm } from './../../../redux/actions/form-actions';

const useStyles = makeStyles((theme) => {
  return createStyles({
    button: {
      border: "1px solid red",
      cursor: "pointer",
      display: "flex",
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      borderRadius: ".3rem",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      backgroundColor: theme.custom.white,
      "&:hover": {
        boxShadow: "0px 4px 4px rgba(251, 70, 107, 0.5)",
        backgroundColor: theme.custom.primary,
        "& > img": {
          content: `url(${hoverAddUserIcon})`,
        },
        "& > p": {
          color: theme.custom.white,
        },
      },
    },
    btnImg: {
      height: "1.2rem",
      marginRight: theme.spacing(1),
    },
    buttonForForm: {
      border: "1px solid red",
      display: "flex",
      padding: `${theme.spacing(1)} ${theme.spacing(1.2)}`,
      borderRadius: ".3rem",
      color: theme.custom.white,
      backgroundColor: theme.custom.primary,
      "& > p": {
        color: theme.custom.white,
      },
      "& > img": {
        content: `url(${hoverAddUserIcon})`,
      },
    },
  });
});

const AddUserButton = ({
  children = "ADD USER",
  isForForm,
  onClick = () => {},
  isDisabled = false,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (!isForForm || !isDisabled) {
      dispatch(createNewForm());
      dispatch(openOverlay());
    }
    onClick(e);
  };



  return (
    <Box
      onClick={handleClick}
      disabled={isDisabled}
      component={"button"}
      style={{
        backgroundColor: isDisabled && "grey",
        cursor: !isDisabled && "pointer",
      }}
      className={!isForForm ? classes.button : classes.buttonForForm}
    >
      <img className={classes.btnImg} alt="add user" src={addUserIcon} />
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: ".9rem",
        }}
        color="primary"
      >
        {children}
      </Typography>
    </Box>
  );
};

export default AddUserButton;
