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
import { buildStats } from "../../../utils/helper/helper-function";
import { deleteUserData } from "../../../redux/actions/data-actions";
import { useSelector, useDispatch } from "react-redux";

const DashboardTable = ({ tableHead = [], tableContent = [] }) => {
  const {
    data: {
      dashboardUserList: {
        pagination: { pageNumber },
      },
      dashboardStatistics,
    },
  } = useSelector((s) => s);

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    console.log("====id====", id);
  };

  const handleDelete = (row) => {
      const newStat =  buildStats(
        {
            data: dashboardStatistics,
            isFemale: row.gender === 'FEMALE',
            isActive: row.isActive,
            isAddNew: false,
        }
      )
    dispatch(deleteUserData(row.id, pageNumber,newStat));
  };

  return (
    <div style={{
        minHeight: "513px"
    }}>
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
                <ActionButtons
                  onEdit={() => handleEdit(row.id)}
                  onDelete={() => handleDelete(row)}
                />
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
