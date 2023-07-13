//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
//import ExpenseItems from './components/ExpenseItems';
import ExpenseList from './components/ExpenseList';

function App() {
  const DUMMY_DATA = [
    {
      id: 0,
      date: "01/01",
      name: "Cookies",
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
      name: "Bread",
      prices: 4.99
    }]

  return (
    <div className="App">
      <Banner />
      {/* <ExpenseItems date={DUMMY_DATA[0].date} name={DUMMY_DATA[0].name} price={DUMMY_DATA[0].prices}/>
      <ExpenseItems date={DUMMY_DATA[1].date} name={DUMMY_DATA[1].name} price={DUMMY_DATA[1].prices}/>
      <ExpenseItems date={DUMMY_DATA[2].date} name={DUMMY_DATA[2].name} price={DUMMY_DATA[2].prices}/> */}
      {/* {DUMMY_DATA.map(expense => <ExpenseItems date={expense.date} name={expense.name} prices={expense.prices}/>)} */}
      <ExpenseList expense={DUMMY_DATA}/>
    </div>
  );
}

export default App;
