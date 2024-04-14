import React from "react";

const Buttons = ({ handleClick, handleACClick, handleEquals, handleDel }) => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="h-4/6 w-full flex mt-2 gap-1">
      <div className="h-full w-full grid grid-cols-3 gap-1">
        <button
          className="bg-green-500 col-span-2 border-white rounded-md  font-bold text-xl"
          onClick={() => handleACClick()}
        >
          AC
        </button>
        <button
          className="bg-blue-500 border border-white rounded-md font-bold text-xl"
          onClick={() => handleDel()}
        >
          DEL
        </button>

        {buttons.map((button, ind) => {
          return (
            <button
              key={ind}
              className="bg-yellow-400 border border-white rounded-md gap-1 font-bold text-xl"
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          );
        })}
        <button
          className="bg-indigo-500 col-span-2 border-white rounded-md font-bold text-xl"
          onClick={handleEquals}
        >
          =
        </button>
      </div>
      <div className="h-full grid grid-cols-1 w-32 gap-1">
        {operators.map((operator) => {
          return (
            <button
              key={operator}
              className="bg-indigo-600 rounded-md border border-white font-bold text-xl"
              onClick={() => handleClick(operator)}
            >
              {operator}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Buttons;
