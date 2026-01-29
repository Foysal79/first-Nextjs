"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" my-3 border-2 border-amber-300 mx-auto text-center">
      <div>
        <h1>Counter page session</h1>
        <p>{count}</p>
      </div>
      <div>
        <div className="flex gap-7 mx-auto justify-center">
          <button onClick={() => setCount(count - 1)}>decrement</button>
          <button onClick={() => setCount(0)}> reset</button>
          <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
