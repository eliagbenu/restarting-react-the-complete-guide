import './ExpenseItem.css';


function ExpenseItem(props)
{

	var theAmount =props.amount; 
	var theTitle =props.title;
	var theDate =props.thedate.toISOString();
	var theMonth =props.thedate.toLocaleString('en-US',{month:'long'});
	var theDay =props.thedate.toLocaleString('en-US',{day:'2-digit'});
	var theYear =props.thedate.getFullYear();

	return ( <div className="default-item">
		<div>
		<h1>Title:{theTitle}</h1>
		</div>
		<div>
		<p>
			<div>Date: {theDate} </div>
			<div>Month: {theMonth} </div>
			<div>Day: {theDay} </div>
			<div>Year: {theYear} </div>
		</p>
		</div>		
		<div>
		<h4>Amount: ${theAmount} Ghana Cedis</h4>
		</div>		
		<hr/>
		</div>
	 );

}

export default ExpenseItem;