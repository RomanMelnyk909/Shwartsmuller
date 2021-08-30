import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
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
    date: new Date(2020, 2, 28),
  },
  {
    id: "e3",
    title: "Anoter costs",
    amount: 2.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e4",
    title: "Last expense",
    amount: 67,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      console.log(prevExpenses)
      return [expense, ...prevExpenses]
    })

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
