import React, { useState, useCallback } from "react";

const functionsCounter = new Set();

function App() {

  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);

  console.log(functionsCounter);
  console.log(functionsCounter.size);

  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>otheCounter: {otherCounter}</h3>
      <button onClick={increment}>+ Count</button>
      <button onClick={decrement}>- Count</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </div>
  );
}

export default App;
