//Task - Load the data. - https://jsonplaceholder.typicode.com/users
//Task - Add a filter (Have an input and filter the names starting with that data).

import { useEffect, useState } from "react";

const Updating = () => {

  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

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

  // ComponentDidUpdate alternative - Used to track and execute logic.
  useEffect(() => {
    const fetch_promise = fetch("https://jsonplaceholder.typicode.com/users");
    fetch_promise.then(response => {
      const json_promise = response.json();
      json_promise.then(data => {
        
          data = data.filter((element) => {
            if(element.name.startsWith(search)) {
              return true;
            } else {
              return false;
            }
          })
        
        // data = data.filter(e => e.name.startsWith(search));

        setList(data);
        console.log(data);
      });
    })
  }, [search]);


  return <div>
    <h4>User List</h4>
    <input type="text" placeholder="Filter By Name" onKeyUp={e => setSearch(e.target.value)} />
    <ul>
      {list.map((element, idx) => {
        return <li key={idx}>{element.name}</li>
      })}
    </ul>
  </div>
}

export default Updating;