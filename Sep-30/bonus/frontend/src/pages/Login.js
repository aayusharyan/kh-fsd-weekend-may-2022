import { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../slice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = e => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    (async _ => {
      const response = await axios.post("http://localhost:3007/login", {
        username: username,
        password: password
      });
      console.log(response.data.data);
      dispatch(loginAction(response.data.data));
      navigate("/")
    })();
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input type="text" placeholder="Enter username" ref={usernameRef} required/>
        <input type="password" placeholder="Enter Password" ref={passwordRef} required/>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Create a new Account?</Link>
    </>
  )
}

export default Login;