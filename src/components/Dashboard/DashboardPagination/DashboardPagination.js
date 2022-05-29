import { Typography, useTheme } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import leftArrowIcon from "../../../assets/dashboard-list-assests/left-icon.png";
import rightArrowIcon from "../../../assets/dashboard-list-assests/right-icon.png";

const useStyles = makeStyles((theme) => {
  return createStyles({
    conatiner: {
      display: "inline-flex",
      alignItems: "center",
      flexDirection: "row",
      gap: ".8rem",
    },
    arrow: {
      borderRadius: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      width: "1rem",
      "& > img": {
        height: "1rem",
      },
    },
    paginateItem: {
      borderRadius: "1rem",
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
      alignItems: "center",
      padding: ".3rem",
      width: "1.2rem",
      height: "1.2rem",
    },
  });
});

const DashboardPagination = ({
  pageNumber,
  totalLength,
  onClickPaginateItem,
}) => {
  const classes = useStyles();

  const totalPageNumber = totalLength / 8; // 8 is the limit

  const isRightButtonActive = pageNumber > 1;
  const isLeftButtonActive = pageNumber < totalPageNumber;

  return (
    <Box className={classes.conatiner}>
      <PaginateButton
        isActive={isRightButtonActive}
        onClick={() =>
          isRightButtonActive && onClickPaginateItem(pageNumber - 1)
        }
      />
      {new Array(Math.ceil(totalLength / 8)).fill(0).map((_, index) => (
        <PaginateItem
          key={index}
          isActive={index + 1 === pageNumber}
          onClick={() => onClickPaginateItem(index + 1)}
        >
          {index + 1}
        </PaginateItem>
      ))}
      <PaginateButton
        isRight
        isActive={isLeftButtonActive}
        onClick={() =>
          isLeftButtonActive && onClickPaginateItem(pageNumber + 1)
        }
      />
    </Box>
  );
};

export default DashboardPagination;

const PaginateItem = ({ children, isActive = false, ...restProps }) => {
  const paginateClass = useStyles().paginateItem;
  const theme = useTheme();
  return (
    <Box
      className={paginateClass}
      sx={{
        backgroundColor: isActive ? theme.custom.primary : "#E1E1EF",
      }}
      {...restProps}
    >
      <Typography color={isActive && "white"}>{children}</Typography>
    </Box>
  );
};

const PaginateButton = ({ isRight = false, isActive, ...restProps }) => {
  const arrowClass = useStyles({ isActive }).arrow;
  const theme = useTheme();
  return (
    <Box
      className={arrowClass}
      sx={{
        color: isActive && "white !important",
        cursor: isActive && "pointer",
        boxShadow: isActive && " 0px 2px 6px rgba(0, 0, 0, 0.19)",
      }}
      {...restProps}
    >
      <img src={isRight ? rightArrowIcon : leftArrowIcon} alt="" />
    </Box>
  );
};
