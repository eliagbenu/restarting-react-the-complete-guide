import './Expense.css';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';


function Expense(props)
{


	return ( <Card>
			      <ExpenseItem className="default-item" 
			      title={props.items[0].title}  
			      amount={props.items[0].amount}  
			      thedate={props.items[0].thedate}  
			      ><
			      /ExpenseItem>
			      <ExpenseItem
			        title={props.items[1].title}  
			        amount={props.items[1].amount}  
			        thedate={props.items[1].thedate}        
			      ></ExpenseItem>
			      <ExpenseItem
			        title={props.items[2].title}  
			        amount={props.items[2].amount}  
			        thedate={props.items[2].thedate}              
			      ></ExpenseItem>
		    </Card>
	 );

}

export default Expense;