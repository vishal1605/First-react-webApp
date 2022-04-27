import React from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import Imageadd from './componenets/Imageadd';
import Gallary from './componenets/Gallary';
import { useState } from 'react';

// import Header from './componenets/Header';
// import FormTut from './componenets/FormTut';
// import Card from './componenets/Card';
// import obj from './componenets/all-data';

function App() {
  
  const [value, setValue] = useState(0);

  function callAdd(param) {
    console.log("Working");
    console.log(param);
    setValue(pre=>pre+param);
    
  }


  return (
    <div className='container'>
      <Navbar />
      <Imageadd addImage={callAdd} />
      <Gallary update={value}/>

    </div>

  );
}

export default App;

/* <Header personDetails={person}/>
      {obj.map((details)=>{
        return (<Card id={details.id} key={details.id}
         firstName={details.firstName}
          lastName={details.lastName}
          age={details.age}
          email={details.email}
          profile={details.profile} />)
      })} */
