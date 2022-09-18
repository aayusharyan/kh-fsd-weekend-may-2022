import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/list' element={<List />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
