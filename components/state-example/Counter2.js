import React from "react";
import { useCounterStore } from "../../stores/counterStore";

const Counter2 = () => {
  const count = useCounterStore(state => state.count);
  return (
    <div>
      <div>COUNT 2: {count} </div>
    </div>
  );
};

export default Counter2;
