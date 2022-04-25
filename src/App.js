import './App.css';
import Navbar from './componenets/Navbar';
import Imageadd from './componenets/Imageadd';
// import Gallary from './componenets/Gallary';

// import Header from './componenets/Header';
// import FormTut from './componenets/FormTut';
// import Card from './componenets/Card';
// import obj from './componenets/all-data';

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Imageadd />

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
