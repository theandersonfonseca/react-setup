import { useState } from 'react';

export function Counter() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={decrement}>Decrement</button>
      <span>{value}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
