import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenseItems=[
    {
    id:1,
    date:new Date(2022,5,30),
    title:'soap',
    price:202.99,
  },
  {
    id:2,
    date:new Date(2021,6,18),
    title:'pillow',
    price:285.99,
  },
  {
    id:3,
    date:new Date(2021,9,12),
    title:'toothpaste',
    price:252.99,
  }
]

  return (
    
      <Expenses items={expenseItems}/>
    
  );
}

export default App;
