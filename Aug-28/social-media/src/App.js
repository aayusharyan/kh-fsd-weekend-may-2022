import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import Post from './routes/Post';
import User from './routes/User';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/post/:post_id' element={<Post />} />
      <Route path='/user/:user_id' element={<User />} />
    </Routes>

    </>
  );
}

export default App;
