import React from "react";

const InputFiled = ({ placeHolder, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        required
        className="py-2 px-2 w-96 border border-gray-300 h-12 transition duration-200 ease-in-out focus:outline-none focus:border focus:border-black rounded-md capitalize"
      />
    </>
  );
};
export default InputFiled;
