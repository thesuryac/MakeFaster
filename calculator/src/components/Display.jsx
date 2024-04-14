import React from "react";

const Display = ({ equation, ans }) => {
  const formatedEquation = equation.join("");
  return (
    <div className="bg-white h-1/6 w-[320px] sm:w-[519px] mb-3">
      <div className="h-1/2  bg-green-400 border border-white rounded-md py-3 flex justify-end items-center">
        <p className="font-semibold text-xl">{formatedEquation}</p>
      </div>
      <div className="h-2/3 bg-indigo-400 border border-white rounded-md py-3 flex justify-end items-center">
        <h1 className=" font-sans font-bold text-3xl">{ans}</h1>
      </div>
    </div>
  );
};

export default Display;
