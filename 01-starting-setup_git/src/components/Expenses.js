import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    return(
    <div className='expenses'>
    <h2>Let's get started!</h2>
    <ExpenseItem title={props.items[0].title} date={props.items[0].date} price={props.items[0].price}/>
    <ExpenseItem title={props.items[1].title} date={props.items[1].date} price={props.items[1].price}/>
    <ExpenseItem title={props.items[2].title} date={props.items[2].date} price={props.items[2].price}/>
    </div>
);
}

export default Expenses;