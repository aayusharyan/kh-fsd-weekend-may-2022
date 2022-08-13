//Task - Load the data. - https://jsonplaceholder.typicode.com/users

import { useEffect, useState } from "react";

const Mounting = () => {

  const [list, setList] = useState([]);

  // Component Did mount alternative. Dependency array is empty.
  useEffect(() => {
    //Logic to execute
    const fetch_promise = fetch("https://jsonplaceholder.typicode.com/users");
    fetch_promise.then(response => {
      const json_promise = response.json();
      json_promise.then(data => {
        setList(data);
        console.log(data);
      });
    })
  }, []);


  return <div>
    <h4>User List</h4>
    <ul>
      {list.map((element, idx) => {
        return <li key={idx}>{element.name}</li>
      })}
    </ul>
  </div>
}

export default Mounting;