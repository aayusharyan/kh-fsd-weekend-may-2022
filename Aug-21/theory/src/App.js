import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Child from './components/Child';
import Red from './components/Red';
import ControlledParent from './components/ControlledParent';
import Fragments from './components/Fragments';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Fragments />

        {/* <ControlledParent /> */}

        {/* <Parent>
          <div>
            ABCD
          </div>
          <Child />
        </Parent> */}

        {/* <Red>
          <h2>Hi all</h2>
        </Red> */}

        {/* <Red>
          <p>I am a para</p>
        </Red> */}

        {/* <Red>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Red> */}
      </header>
    </div>
  );
}

export default App;
