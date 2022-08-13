//Timer example

import { useEffect, useState } from "react";

const Unmounting = () => {
  var [count, setCount] = useState(0);


  const timeUpdated = () => {
    console.log("ABCD");
    setCount(c => {
      console.log(`Interval - ${c}`);
      return c + 1;
    });
  }


  useEffect(_ => {
    const id = setInterval(timeUpdated, 1000);

    return _ => {
      clearInterval(id);
    }
  }, []);

  return <div>
    <p>ABCD - {count}</p>
  </div>
}

export default Unmounting;