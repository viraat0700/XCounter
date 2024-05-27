import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count+1);
  }
  const handleDecrement = () => {
    setCount(count-1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: <span>{count}</span></p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default React.memo(Counter);