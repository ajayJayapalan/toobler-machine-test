import React from "react";
import Overlay from "./Overlay";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

const MyLoader = () => {
  const {
    UI: { isLoading },
  } = useSelector((state) => state);
  return (
    <Overlay isVisible={isLoading} isForLoader>
      <BounceLoader />
    </Overlay>
  );
};

export default MyLoader;
