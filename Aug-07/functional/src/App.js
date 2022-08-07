import logo from './logo.svg';
import './App.css';
import Sample from './components/Sample';
import Intro from './components/Intro';
import Child from './components/Child';
import PropsIntro from './components/PropsIntro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sample />
        <hr />
        {/* <Intro /> */}
        <PropsIntro name="Aayush" role="Educator" interest="JS" />
        <br />
        <Child message="Hello from React" />
      </header>
    </div>
  );
}

export default App;
