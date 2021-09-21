import React from "react";
import useCounter from "./useCounter";
import Button from "../button";

const Counter: React.FC<{}> = () => {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div className="p-5 mt-10 w-60 shadow-2xl bg-gray-100 rounded-md">
      <h3 className="text-center p-5">{count}</h3>
      <div className="flex justify-center items-center">
        <Button title="+" onClick={handleIncrement} />
        <Button title="-" onClick={handleDecrement} />
      </div>
    </div>
  );
};

export default Counter;
