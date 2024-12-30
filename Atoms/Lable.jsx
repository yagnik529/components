import React from "react";
import InputFiled from "./InputFiled";
const Lable = ({ lable, star }) => {
  return (
    <>
      <lable className="capitalize">
        {lable}
        <span className="text-red-800">{star}</span>
      </lable>
    </>
  );
};
export default Lable;
