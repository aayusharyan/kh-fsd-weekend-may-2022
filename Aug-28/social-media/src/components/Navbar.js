import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h4>Fake Social Media App</h4>
      <span><Link to="/">Home</Link></span>
    </nav>
  )
}

export default Navbar