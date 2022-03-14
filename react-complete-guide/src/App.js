import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {title: 'Elden Ring' , amount: 100.45, date: new Date(2022, 3, 13)},
    {title: 'GTA V' , amount: 80, date: new Date(2022, 3, 1)},
    {title: 'Cyberpunk' , amount: 102.5, date: new Date(2022, 3, 7)},
    {title: 'Skyline' , amount: 45, date: new Date(2022, 3, 13)},
    {title: 'Spider Man' , amount: 200.45, date: new Date(2022, 3, 8)},
    {title: 'Resident Evil' , amount: 300.45, date: new Date(2022, 3, 11)},

  ];
  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date = {expenses[0].date}
      />

      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date = {expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date = {expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date = {expenses[3].date}
      ></ExpenseItem>

      <ExpenseItem 
        title={expenses[4].title} 
        amount={expenses[4].amount} 
        date = {expenses[4].date}
      ></ExpenseItem>

      <ExpenseItem 
        title={expenses[5].title} 
        amount={expenses[5].amount} 
        date = {expenses[5].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
