import React from "react";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import MyPagination from "../../common/MyPagination";

const useStyles = makeStyles((theme) => {
  return createStyles({
    conatiner: {
      display: "inline-flex",
      alignItems: "center",
      flexDirection: "row",
      gap: ".8rem",
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
      {
        <MyPagination
          isLeftButtonActive={isLeftButtonActive}
          isRightButtonActive={isRightButtonActive}
          totalLength={Math.ceil(totalLength / 8)}
          currentPageNumber={pageNumber}
          onClickPaginateItem={onClickPaginateItem}
        />
      }
    </Box>
  );
};

export default DashboardPagination;
