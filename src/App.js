import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';

function App() {
  const DUMMY_DATA = [{
    id: 0,
    date: "01/01",
    name: "cookies",
    prices: 3.99,
  },
  {
    id: 1,
    date: "02/02",
    name: "Eggs",
    prices: 8.99,
  },
  {
    id: 2,
    date: '03/03',
    name: "bread",
    prices: 4.99
  }]

  return (
    <div className="App">
      <Banner />
    </div>
  );
}

export default App;
