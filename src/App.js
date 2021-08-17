
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  let expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Paper",
      amount: 29.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Anoter costs",
      amount: 2.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Last expense",
      amount: 67,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div>
      
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
