import React from "react";

import { ActionButtons, UserStatusTableCell } from "../DashboardUtils";
import { buildStats } from "../../../utils/helper/helper-function";
import { deleteUserData } from "../../../redux/actions/data-actions";
import { useSelector, useDispatch } from "react-redux";
import { updateNewForm } from "../../../redux/actions/form-actions";
import MyTable from "../../common/MyTable";

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
    dispatch(updateNewForm(id));
  };

  const handleDelete = (row) => {
    const newStat = buildStats({
      data: dashboardStatistics,
      isFemale: row.gender === "FEMALE",
      isActive: row.isActive,
      isAddNew: false,
    });
    dispatch(deleteUserData(row.id, pageNumber, newStat));
  };

  const myTableContent = tableContent.map((content) => ({
    id: content.id,
    name: content.name,
    email: content.email,
    gender: content.gender,
    Actions: (
      <ActionButtons
        onEdit={() => handleEdit(content.id)}
        onDelete={() => handleDelete(content)}
      />
    ),
    StatusCell: <UserStatusTableCell isActive={content.isActive} />,
  }));

  return (
    <div
      style={{
        minHeight: "513px",
      }}
    >
    <MyTable 
        tableHead={tableHead}
        tableContent={myTableContent}
    />
    </div>
  );
};

export default DashboardTable;
