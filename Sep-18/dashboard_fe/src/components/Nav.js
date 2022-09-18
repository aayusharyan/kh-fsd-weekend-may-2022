import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to='/list'>List</Link>
    </div>
  )
}

export default Nav;