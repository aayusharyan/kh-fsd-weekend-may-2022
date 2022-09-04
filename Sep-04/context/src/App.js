import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import { Ctx1 } from './contexts';
import CompA from './components/CompA';

function App() {
  const data = "ABCD";
  return (
    <div className="App">
      <header className="App-header">
        App &lt;- {data}
       <Comp1 data={data}/>
        <br />
        <hr />
        <br />
       <Ctx1.Provider value={data}>
        App &lt;- {data}
        <CompA />
       </Ctx1.Provider>
      </header>
    </div>
  );
}

export default App;
