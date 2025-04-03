
import './App.css';
import Cart from './components/Cart';
import Purchase from './components/Purchase';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Purchase/>
      <Cart/>
      <Total/>

    </div>
  );
}

export default App;
