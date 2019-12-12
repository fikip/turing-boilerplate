import React from "react";
import { useCounterStore } from "../../stores/counterStore";

const Counter1 = () => {
  const [count, set] = useCounterStore(state => [state.count, state.set]);
  return (
    <div>
      <button
        onClick={() =>
          set(state => {
            state.count += 1;
          })
        }
        style={{ marginBottom: 10 }}
      >
        Press me
      </button>
      <div>COUNT 1: {count} </div>
    </div>
  );
};

Counter1.propTypes = {};
Counter1.defaultProps = {};

export default Counter1;
