import React from "react";
import { useState } from "react";
import { isEmailValid } from "./../../../utils/helper/helper-function";

const useDashBoardForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isStatusActive, setIsStatusActive] = useState(null);

  const handleClear = () => {
    setName("");
    setEmail("");
    setGender("");
    setIsStatusActive(null);
  };

  const isValid = !!(
    name &&
    isEmailValid(email) &&
    gender &&
    isStatusActive !== null
  );

  const onTextChange = (e, setState) => setState(e.target.value);

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

  return {
    formElements,
  };
};

export default useDashBoardForm;
