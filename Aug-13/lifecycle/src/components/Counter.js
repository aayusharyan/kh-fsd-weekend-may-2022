import { useState } from 'react';

const Counter = () => {
  const[counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(c => c + 1);
  } 

  return <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
  </div>
}

export default Counter;