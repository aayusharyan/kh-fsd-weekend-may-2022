import logo from './logo.svg';
import './App.css';
import Like from './components/Like';
import Dislike from './components/Dislike';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Like />
        <Display />
        <Dislike />
      </header>
    </div>
  );
}

export default App;
