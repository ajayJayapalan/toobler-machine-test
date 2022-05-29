import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";

import { ActionButtons, UserStatusTableCell } from "../DashboardUtils";

const DashboardTable = ({ tableHead = [], tableContent = [] }) => {
  return (
    <div>
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
          {tableContent.map((row) => (
            <TableRow key={row.id}>
              <TableBodyCell align="left">{row.id}</TableBodyCell>
              <TableBodyCell align="left">{row.name}</TableBodyCell>
              <TableBodyCell align="left">{row.email}</TableBodyCell>
              <TableBodyCell align="left">{row.gender}</TableBodyCell>
              <TableBodyCell align="left">
                <ActionButtons />
              </TableBodyCell>
              <TableBodyCell align="left">
                <UserStatusTableCell isActive={row.isActive} />
              </TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;

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
