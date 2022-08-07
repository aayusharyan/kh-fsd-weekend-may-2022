import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Child1 message="Hello React" /> */}
        <Parent />

      </header>
    </div>
  );
}

export default App;
