import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props)
{

	var theAmount =props.amount; 
	var theTitle =props.title;

	return ( <div className="default-item">
				<div>
					<h1>Title:{theTitle}</h1>
				</div>
					<div>
					<p>
						<ExpenseDate
							theDate={props.thedate}
							theMonth={props.thedate}
							theDay={props.thedate}
							theYear={props.thedate}				
						>
						</ExpenseDate>
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