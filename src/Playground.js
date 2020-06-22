import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

export default function Playground() {
  //useState passes the initial state value
  //it returns an array [state, function for adjusting state]
  const [count, setCount] = useState(0);

  const [color, setColor] = useState(null);

  //accepts two arguements, function to do when it runs, [array of dependencies] (list of things that should trigger the effect)
  useEffect(() => {
    setColor(randomColor());
  }, [count]);
  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
    </div>
  );
}
