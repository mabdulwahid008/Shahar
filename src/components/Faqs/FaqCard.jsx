import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { FaSquareMinus } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const FaqCard = ({ title, desc }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center border shadow-sm bg-white border-primary rounded-lg px-2"
        onClick={toggleDescription}
      >
        <h2 className="font-bold texl-xl mb-1 mt-1 w-full cursor-pointer py-2">
          {title}
        </h2>
        <span>
          {isDescriptionVisible ? (
            <IoIosArrowUp className=" text-primary text-xl" />
          ) : (
            <IoIosArrowDown className=" text-primary" />
          )}
        </span>
      </div>
      <div>
        {isDescriptionVisible ? (
          <p className="text-justify  bg-darkgold text-white block p-5 mt-1 rounded-md">
            {desc}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default FaqCard;
