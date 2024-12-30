import React from "react";

const Radio = ({ radioItem }) => {
  return (
    <div className="flex gap-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="option"
          value={radioItem}
          // onChange={}
          className="sr-only peer"
        />
        <span className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500  peer-checked:before:absolute peer-checked:before:text-white peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:transform peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%] hover:border-blue-400 hover:bg-blue-100 transition-all"></span>
        <span className="ml-2 text-gray-800">{radioItem}</span>
      </label>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="option"
          value={radioItem}
          // onChange={}
          className="sr-only peer"
        />
        <span className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500  peer-checked:before:absolute peer-checked:before:text-white peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:transform peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%] hover:border-blue-400 hover:bg-blue-100 transition-all"></span>
        <span className="ml-2 text-gray-800">{radioItem}</span>
      </label>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="option"
          value={radioItem}
          // onChange={}
          className="sr-only peer"
        />
        <span className="w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500  peer-checked:before:absolute peer-checked:before:text-white peer-checked:before:top-1/2 peer-checked:before:left-1/2 peer-checked:before:transform peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%] hover:border-blue-400 hover:bg-blue-100 transition-all"></span>
        <span className="ml-2 text-gray-800">{radioItem}</span>
      </label>
    </div>
  );
};

export default Radio;
