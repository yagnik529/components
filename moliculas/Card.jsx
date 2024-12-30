import React from "react";
import Button from "../Atoms/Button";
import { MdInstallDesktop } from "react-icons/md";

const Card = ({ image, cardTitle, cardDescription }) => {
  return (
    <div className="flex flex-col  sm:w-80 m-5  md:w-1/4 lg:w-1/5 xl:w-1/6   rounded-lg shadow-md">

      <div className="w-full h-56  rounded-t-lg overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt="Card Image" />
      </div>
      <div className="flex flex-col justify-center capitalize tracking-wide p-4">
        <span className="text-xl font-semibold">{cardTitle}</span>
        <p className="text-gray-800 text-sm sm:text-base">{cardDescription}</p>
        <Button text="Click" icon={<MdInstallDesktop/>} />
      </div>
    </div>
  );
};

export default Card;
