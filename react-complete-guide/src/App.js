
import './App.css';
import './components/Expenses.css';
import Expenses from './components/Expenses';
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
      <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
