import React from "react";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="flex sm:h-[80vh]sm:w-[80vw] w-screen h-[90vh] justify-center items-center mt-10">
      <Calculator />
    </div>
  );
};

export default App;
