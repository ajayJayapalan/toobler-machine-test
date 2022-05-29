import { useEffect, useState } from "react";
import {
  buildStats,
  generateStats,
  isEmailValid,
} from "./../../../utils/helper/helper-function";
import { useDispatch } from "react-redux";
import { closeOverlay } from "../../../redux/actions/ui-actions";
import { useSelector } from "react-redux";
import { postNewUserData } from "../../../redux/actions/data-actions";

const useDashBoardForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isStatusActive, setIsStatusActive] = useState(null);

  const dispatch = useDispatch();
  const {
    data: {
      dashboardUserList: { pagination },
      dashboardStatistics,
    },
    userForm,
  } = useSelector((s) => s);

  const handleClose = () => dispatch(closeOverlay());

  const handleClear = () => {
    setName("");
    setEmail("");
    setGender("");
    setIsStatusActive(null);
  };

  const isAllValid = !!(
    name &&
    isEmailValid(email) &&
    gender &&
    isStatusActive !== null
  );

  const onTextChange = (e, setState) => setState(e.target.value);

  useEffect(() => {
    setName(userForm.name);
    setEmail(userForm.email);
    setGender(userForm.gender);
    setIsStatusActive(userForm.isActive === "" ? null : userForm.isActive);
  }, [userForm]);

  const formElements = {
    name: {
      label: "Name",
      type: "text",
      placeholder: "Please enter name",
      value: name,
      onChange: (e) => onTextChange(e, setName),
    },
    email: {
      label: "Email",
      type: "email",
      placeholder: "Please enter email",
      value: email,
      onChange: (e) => onTextChange(e, setEmail),
    },
    gender: {
      label: "Gender",
      select: {
        onChange: (e) => {
          onTextChange(e, setGender);
        },
        value: gender,
      },
      options: [
        {
          value: "",
          label: "Choose gender",
        },
        {
          value: "MALE",
          label: "MALE",
        },
        {
          value: "FEMALE",
          label: "FEMALE",
        },
      ],
    },
    status: {
      label: "Status",
      radio: {
        onChange: (e) =>
          setIsStatusActive(e.target.value === "ACTIVE" ? true : false),
      },
      values: [
        {
          name: "status",
          value: "ACTIVE",
          label: "Active",
        },
        {
          name: "status",
          value: "INACTIVE",
          label: "Inactive",
        },
      ],
    },
  };

  const handleAddUser = () => {
    const postData = {
      id: Number(pagination.totalLength) + Math.ceil(Math.random() * 100000),
      name,
      email,
      gender,
      isActive: !!isStatusActive,
    };

    const newStats = buildStats({
      data: dashboardStatistics,
      isFemale: gender === "FEMALE",
      isActive: !!isStatusActive,
      isAddNew: true,
    });

    dispatch(
      postNewUserData(postData, Math.ceil(pagination.totalLength / 8), newStats)
    );
  };

  return {
    formElements,
    handleClear,
    isAllValid,
    handleClose,
    handleAddUser,
  };
};

export default useDashBoardForm;
