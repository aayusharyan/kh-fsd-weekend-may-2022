import { useState, useEffect } from "react";
import axios from "axios";
const List= () => {
  const [userList, setUserList] = useState([]);

  useEffect(_ => {
    (async _ => {
      const response = await axios.get("http://localhost:3007/list");
      setUserList(response.data.users);
    })();
  }, []);

  return (
    <div>
      <p>List</p>
      <ul>
        {userList.map((singleUser, idx) => {
          return <li key={idx}>{singleUser}</li>
        })}
      </ul>
    </div>
  )
}

export default List;