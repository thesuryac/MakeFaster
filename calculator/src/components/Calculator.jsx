import React, { useEffect, useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
  const [ans, setAns] = useState(0);
  const [history, setHistory] = useState([]);
  const [equation, setEquation] = useState([]);
  const [error, setError] = useState("");
  const handleClick = (button) => {
    setEquation([...equation, button]);
  };
  const handleACClick = () => {
    setEquation([]);
    setAns(0);
    setError("");
  };
  const handleDel = () => {
    setEquation(equation.slice(0, -1));
  };
  const handleEquals = () => {
    try {
      setAns(eval(equation.join("")));
      setHistory([...history, equation]);
    } catch (error) {
      setError("Invalid Input");
    }
  };
  return (
    <div className=" h-full w-auto flex-col justify-center items-center">
      <div className="">
        <div className="h-1/6  w-auto sm:w-[519px] bg-neutral-300 rounded-md flex-col mb-1 text-right items-center">
          {error && (
            <p className="bg-red-500 h-full w-auto rounded-md flex justify-center items-center">
              {error}
            </p>
          )}
          {!error &&
            history.slice(-3).map((ele, ind) => {
              return <p key={ind}>{ele.join("")}</p>;
            })}
        </div>

        <Display equation={equation} ans={ans} />
      </div>
      <Buttons
        handleClick={handleClick}
        handleACClick={handleACClick}
        handleEquals={handleEquals}
        handleDel={handleDel}
      />
    </div>
  );
};

export default Calculator;
