import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';


const ExpenseItem = (props) =>
{

	var theAmount =props.amount; 
	var theTitle =props.title;

	return ( <Card className="default-item">
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
						<div>
							<h1>Title:{theTitle}</h1>
						</div>					
						<div>
							<h4>Amount: ${theAmount} Ghana Cedis</h4>
						</div>
					</div>

				<hr/>
		    </Card>
	 );

}

export default ExpenseItem;