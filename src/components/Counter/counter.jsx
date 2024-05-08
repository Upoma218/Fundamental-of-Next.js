"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {" "}
      <h1 className="text-center p-5"> Counter {counter}</h1>
      <div className="flex justify-center">
        <button
          className="mx-5 btn btn-accent"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <button
          className="mx-5 btn btn-primary"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
