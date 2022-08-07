import { useState } from 'react';

const Stateful = () => {
  const[counter, setCounter] = useState(0);

  const inputChanged = e => {
    setCounter(e.target.value.length);
  }

  return <div>
    <input type="text" onKeyUp={inputChanged} />

    <p>Characters: {counter}</p>
  </div>
}

export default Stateful;