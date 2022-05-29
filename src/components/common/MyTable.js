import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { withStyles } from "@mui/styles";


const MyTable = ({ tableHead = [], tableContent = [] }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHead.map((text, id) => (
            <TableHeaderCell key={id} align="left">
              {text}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableContent.map((row, index) => (
          <TableRow key={index}>
            {Object.keys(row).map((key) => (
              <TableBodyCell align="left">{row[key]}</TableBodyCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyTable;

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: `${theme.custom.secondaryText} !important`,
    fontWeight: "400 !important",
    borderColor: "#DCDCEE",
  },
}))(TableCell);

const TableBodyCell = withStyles((theme) => ({
  root: {
    color: `#52575A !important`,
    borderColor: "#DCDCEE",
  },
}))(TableCell);
