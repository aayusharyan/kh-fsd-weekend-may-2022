import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import Unmounting from './components/Unmounting';
import {useState} from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={_ => setShow(c => !c)}>Show/Hide</button>
        {/* <Counter /> */}
        {/* <Mounting /> */}
        {/* <Updating /> */}
        {/* {show == true ? <Unmounting /> : <p></p>} */}
        {show ? <Unmounting /> : false}
      </header>
    </div>
  );
}

export default App;
