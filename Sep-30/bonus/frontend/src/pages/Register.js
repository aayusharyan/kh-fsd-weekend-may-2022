import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const cnfPasswordRef = useRef();
  const nameRef = useRef();

  const register = e => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const cnfPassword = cnfPasswordRef.current.value;
    const name = nameRef.current.value;

    if(password !== cnfPassword) {
      alert("Passwords do not match, please check");
      return;
    }

    (async _ => {
      const response = await axios.post("http://localhost:3007/register", {
        username: username,
        password: password,
        name: name
      });
      alert(response.data.message);
      navigate("/");
    })();
  }
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input type="text" placeholder="Enter Username" required ref={usernameRef} />
        <input type="password" placeholder="Enter Password" required ref={passwordRef} />
        <br />
        <input type="password" placeholder="Confirm Password" required ref={cnfPasswordRef} />
        <input type="text" placeholder="Enter name" required ref={nameRef} />
        <br />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </>
  )
}

export default Register;