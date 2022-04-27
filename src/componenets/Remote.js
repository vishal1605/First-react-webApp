import React, {useState} from 'react'

function Remote(param) {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(preValue => preValue - 1);
        myValue();
    }
    const increment = () => {
        setCount(preValue => preValue + 1);
        myValue();

    }

    function myValue(){
        param.myFunction(count);
    }

    return (
        <div className='container'>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Remote