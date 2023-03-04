import './ExpenseItem.css';


function ExpenseItem(props)
{

	return ( <div className="default-item">
		<div>
		<h1>Title:{props.title}</h1>
		</div>
		<div>
		<p>Date: {props.thedate.toISOString()}</p>
		</div>		
		<div>
		<h4>Amount: ${props.amount} Ghana Cedis</h4>
		</div>		
		<hr/>
		</div>
	 );
}

export default ExpenseItem;