import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <header>
        <h2>My Fake Store</h2>
      </header>

      <section>
        <ProductList />
      </section>
      
      <footer>
        <p> &copy; Aayush &amp; team. </p>
      </footer>
    </div>
  );
}

export default App;
