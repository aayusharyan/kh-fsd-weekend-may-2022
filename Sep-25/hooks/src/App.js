import logo from './logo.svg';
import './App.css';
import { useInternetChecker } from './hooks/InternetChecker';

function App() {
  const internetStatus = useInternetChecker();

  return (
    <div className="App">
      <header className="App-header">
        {internetStatus === true ? (
          <p>✅ Internet is Connected</p>
        ) : (
          <p>❌ Internet is Disconnected</p>
        )}
      </header>
    </div>
  );
}

export default App;
