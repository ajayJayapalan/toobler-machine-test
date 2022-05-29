import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

import addUserIcon from "../../../assets/dashboard-list-assests/user-add.png";
import hoverAddUserIcon from "../../../assets/dashboard-list-assests/hover-user-add.png";

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
        "& > p":{
            color: theme.custom.white,
        }
      },
    },
    btnImg: {
      height: "1.2rem",
      marginRight: theme.spacing(1),
    },
  });
});

const AddUserButton = ({children="ADD USER",}) => {
  const classes = useStyles();

  return (
    <Box component={"button"} className={classes.button}>
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
