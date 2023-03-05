//import logo from './logo.svg';
import './App.css';
import Expense from './components/expense/Expense';


const App = () => 
{

    const expenses =  [
        {
        id: 'el',
        title: 'Pens',
        amount: 45.3, 
        thedate: new Date(2023, 3, 20 )      
      },
      {
        id: 'ep',
        title: 'Pencil',
        amount: 55.3, 
        thedate: new Date(2023, 12, 20 )      
      },    
      {
        id: 'et',
        title: 'Eraser',
        amount: 43, 
        thedate: new Date(2023, 3, 10 )      
      } ,       
    ];


  return (
    <div className="App">
      <h2>Arrow functions - lesson  43</h2>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
