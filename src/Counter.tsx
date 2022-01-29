import { useState } from 'react';

type CounterProps = {
  initialValue: number;
};

export function Counter({ initialValue }: CounterProps) {
  const [value, setValue] = useState(initialValue);

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
