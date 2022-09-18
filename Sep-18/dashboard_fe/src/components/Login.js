import { useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formSubmitted = e => {
    e.preventDefault();
    (async _ => {
      const username = usernameRef.current.value;
      const password = passRef.current.value;
      console.log(username, password);
      try {
        const response = await axios.post("http://localhost:3007/login", {
          username: username,
          password: password
        });
        if(response.status == 200) {
          navigate("/dashboard");
        } else {
          alert("Login Failure");
        }
        // alert("Login Successful");
      } catch(e) {
        alert("Login Failure")
      }
      
    })();
  }

  const usernameRef = useRef();
  const passRef = useRef();

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <input type="text" placeholder="Username" ref={usernameRef} required />
        <input type="password" placeholder="Password" ref={passRef} required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;