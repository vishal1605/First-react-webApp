import React, { useReducer, useState } from 'react'
import List from './List'
import { crudReducer } from './myReducer';

function Head() {

    const [state, dispatch] = useReducer(crudReducer, []);

    const [input, setInput] = useState({
        firstName:"",
        lastName:""
    });

    function handleForm(e){
        e.preventDefault();
        console.log("Form");
        setInput({
            firstName:"",
            lastName:""
        });
        dispatch({type:'add_user',payload:{input:{...input, id:Date.now()}}})
    }
  return (
    <div className="row">
        <div className="col-6 m-auto mt-3 border border-warning border-2 py-3">
            <form onSubmit={handleForm}>
                <input type="text" onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})} name='firstName' value={input.firstName} placeholder='name...' />&nbsp;&nbsp;
                <input type="text" onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})} name='lastName' value={input.lastName} placeholder='sirname...'/>&nbsp;
                <button className='btn btn-primary' >Submit</button>
            </form>

        </div>
        <List singleUser={{state,dispatch}}/>
    </div>
  )
}

export default Head