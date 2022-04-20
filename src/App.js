import './App.css';
import Header from './componenets/Header';
import FormTut from './componenets/FormTut';

function App() {

  let obj = {
    firstName:"Vishal",
    lastName:"Gupta",
    age :26
  }
  return (
    <div className='container'>
      <Header details={obj}/>
      <FormTut/>
    </div>
  );
}

export default App;
