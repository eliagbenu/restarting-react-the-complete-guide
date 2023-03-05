//import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense';


function App() 
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
        title: 'Pens',
        amount: 43, 
        thedate: new Date(2023, 3, 10 )      
      } ,       
    ];


  return (
    <div className="App">
      <h2>Lets get started - lesson  39</h2>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
