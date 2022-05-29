import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

import leftArrowIcon from "../../assets/dashboard-list-assests/left-icon.png";
import rightArrowIcon from "../../assets/dashboard-list-assests/right-icon.png";
import { Box, Typography, useTheme } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return createStyles({
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

const MyPagination = ({
  isRightButtonActive,
  onClickPaginateItem,
  totalLength,
  currentPageNumber,
  isLeftButtonActive,
}) => {
  return (
    <>
      <PaginateButton
        isActive={isRightButtonActive}
        onClick={() =>
          isRightButtonActive && onClickPaginateItem(currentPageNumber - 1)
        }
      />
      {new Array(totalLength).fill(0).map((_, index) => (
        <PaginateItem
          key={index}
          isActive={index + 1 === currentPageNumber}
          onClick={() => onClickPaginateItem(index + 1)}
        >
          {index + 1}
        </PaginateItem>
      ))}
      <PaginateButton
        isRight
        isActive={isLeftButtonActive}
        onClick={() =>
          isLeftButtonActive && onClickPaginateItem(currentPageNumber + 1)
        }
      />
    </>
  );
};

export default MyPagination;

const PaginateItem = ({ children, isActive = false, ...restProps }) => {
  const paginateClass = useStyles().paginateItem;
  const theme = useTheme();
  return (
    <Box
      className={paginateClass}
      sx={{
        backgroundColor: isActive ? theme.custom.primary : "white",
      }}
      {...restProps}
    >
      <Typography color={isActive && "white"}>{children}</Typography>
    </Box>
  );
};

const PaginateButton = ({ isRight = false, isActive, ...restProps }) => {
  const arrowClass = useStyles({ isActive }).arrow;
  return (
    <Box
      className={arrowClass}
      sx={{
        color: isActive && "white !important",
        cursor: isActive && "pointer",
        boxShadow: isActive && "0px 2px 6px rgba(0, 0, 0, 0.19)",
      }}
      {...restProps}
    >
      <img src={isRight ? rightArrowIcon : leftArrowIcon} alt="" />
    </Box>
  );
};
