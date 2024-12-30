import React from "react";

const Select = ({ optionData }) => {
  return (
    <>
      <select
        name="options"
        id="options"
        className="block w-96 mt-3  px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>
          Select an option
        </option>
        <option value={optionData}>{optionData}</option>
        <option value={optionData}>{optionData}</option>
        <option value={optionData}>{optionData}</option>
      </select>
    </>
  );
};

export default Select;
