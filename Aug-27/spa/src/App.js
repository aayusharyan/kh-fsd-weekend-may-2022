import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>
          <p>
            <span onClick={_ => setPage(0)}>Home</span> 
            &nbsp; | &nbsp;
            <span onClick={_ => setPage(1)}>About</span> 
            &nbsp; | &nbsp; 
            <span onClick={_ => setPage(2)}>Contact</span>
          </p>
        </div> */}
        {/* {page == 0 ? <Home /> : (
          page == 1 ? <About /> : <Contact />
        )} */}

        <div>
          <p>
            <Link to="/">Home</Link> 
            &nbsp; | &nbsp;
            <Link to="/about">About</Link> 
            &nbsp; | &nbsp; 
            <Link to="/contact">Contact</Link>
          </p>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
