import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

import StatusCircle from "../../UI/StatusCircle";
import { ActionButtons, UserStatusTableCell } from "../DashboardUtils";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = new Array(10).fill({
  name: "Ajay Jaypalan",
  email: "ajayjaymon@gmail.com",
  gender: "Male",
  isAcive: true,
});

const DashboardTable = () => {
  return (
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeaderCell align="left">Sl No.</TableHeaderCell>
            <TableHeaderCell align="left">Name</TableHeaderCell>
            <TableHeaderCell align="left">Email</TableHeaderCell>
            <TableHeaderCell align="left">Gender</TableHeaderCell>
            <TableHeaderCell align="left">Actions</TableHeaderCell>
            <TableHeaderCell align="left">Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableBodyCell align="left">{index}</TableBodyCell>
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
