import './ExpenseDate.css';

function ExpenseDate(props)
{

	const theDate =props.theDate.toISOString();
	const theMonth =props.theMonth.toLocaleString('en-US',{month:'long'});
	const theDay =props.theDay.toLocaleString('en-US',{day:'2-digit'});
	const theYear =props.theYear.getFullYear();

	return (<p>
			<div className="expense-date__date" >Date: {theDate} </div>
			<div  className="expense-date__month" >Month: {theMonth} </div>
			<div  className="expense-date__day" >Day: {theDay} </div>
			<div  className="expense-date__year" >Year: {theYear} </div>
		</p>
	 );

}

export default ExpenseDate;