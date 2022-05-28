import React from 'react'
import { createStore } from 'redux'

function Index() {

    // const increment = ()=>{
    //     return {type:"increase"}
    // }
    // const decrement = ()=>{
    //     return {type:"decrease"}
    // }


    // const reducer = (state="", action)=>{
    //     switch (action.type) {
    //         case 'increase':
    //             return state="True";
    //         case 'decrease':
    //             return state="False";
                
        
    //         default:
    //             return state;
    //     }
    // }

    // const store = createStore(reducer);

    // store.subscribe(()=>console.log(store.getState()));

    // store.dispatch(increment());
    // store.dispatch(decrement());
  return (
    <div>Hello index</div>
  )
}

export default Index