import './App.css';
import axios from 'axios';
import Stats from './components/Stats';
import { useState } from 'react';
import Winner from './components/Winner';

function App() {
  const [stats, setStats] = useState([]);
  const [winner, setWinner] = useState({});

  const vote = async candidateId => {
    const result = await axios.post(`http://localhost:3007/vote?candidateId=${candidateId}`);
    // alert(result.data);
    getStats();
    setWinner({});
  }

  const getStats = async _ => {
    const response = await axios.get("http://localhost:3007/stats");
    setStats(response.data.stats);
  }

  const getResult = async _ => {
    const response = await axios.get("http://localhost:3007/result");
    setWinner(response.data.data[0]);
  }

  const resetAll = async _ => {
    const response = window.confirm("Are you sure you want to reset the data?");
    if(response) {
      await axios.delete("http://localhost:3007/reset");
      getStats();
      setWinner({});
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={_ => vote(1) }>Vote for 1</button>
          &emsp;
          <button onClick={_ => vote(2) }>Vote for 2</button>
          &emsp;
          <button onClick={_ => vote(3) }>Vote for 3</button>
        </div>
        <br />
        <Stats data={stats} getData={getStats} />
        <br />
        <br />
        <Winner data={winner} getData={getResult} />
        <br />
        <br />
        <button style={{backgroundColor: "red", border: "none", color: "white"}} onClick={resetAll}>Reset Data</button>
      </header>
    </div>
  );
}

export default App;
