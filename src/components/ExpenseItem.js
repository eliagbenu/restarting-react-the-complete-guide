import './ExpenseItem.css';


function ExpenseItem()
{
	const expenseDate = new Date(2023,3, 2 );
	const expenseTitle = 'An expense';
	const expenseAmount = 45;

	return ( <div className="default-item">
		<div>
		<h1>Title:{expenseTitle}</h1>
		</div>
		<div>
		<p>Date: {expenseDate.toISOString()}</p>
		</div>		
		<div>
		<h4>Amount: ${expenseAmount} Ghana Cedis</h4>
		</div>		
		<hr/>
		</div>
	 );
}

export default ExpenseItem;