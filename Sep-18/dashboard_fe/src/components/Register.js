import axios from "axios";
import { useRef } from "react";
const Register = () => {

  const usernameRef = useRef();
  const passRef = useRef();

  const formSubmitted = e => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passRef.current.value;
    (async _ => {
      try {
        const response = await axios.post("http://localhost:3007/register", {
          username: username,
          password: password
        });
        if(response.status == 200) {
          alert("Registration Successful");
        } else {
          alert("Registration Failed")
        }
      } catch(e) {
        alert("Registration Failed");
      }
      
    })();
  }

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <input type="text" placeholder="Username" ref={usernameRef} required />
        <input type="password" placeholder="Password" ref={passRef} required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;