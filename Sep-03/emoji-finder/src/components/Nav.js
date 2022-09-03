import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Nav = _ => {
  const [query, setQuery] = useState("");
  const navigator = useNavigate();
  
  const filter = e => {
    e.preventDefault();
    navigator(`/search?q=${query}`);
  }

  return (
    <>
    <Link to="/">
      <h2 style={{display: "inline"}}>Home</h2>
    </Link>
    &emsp; | &emsp;
    <h2 style={{display: "inline"}}>Search</h2>
    <br />
    <br />
    <form onSubmit={filter}>
      <input type="text" placeholder="Filter" onKeyUp={e => setQuery(e.target.value)} />
      <button type="submit"> Search </button>
    </form>
    </>
  )
}

export default Nav;