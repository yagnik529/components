import React from "react";

const Button = ({ text, icon }) => {
  return (
    <>
      <button className="px-5 py-2 bg-blue-900 text-white rounded capitalize tracking-wide border border-blue-900 hover:bg-blue-950 flex justify-center items-center gap-2 hover:shadow-2xl  duration-500 ">
        {icon} {text}
      </button>
    </>
  );
};
export default Button;
