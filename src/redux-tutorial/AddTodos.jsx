import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD } from './redux-action/TaskAction';

function AddTodos() {
    const [task, settask] = useState({
        id: 0,
        enteredTask: "",
        taskStatus: false
    });

    const dispatch = useDispatch();

    const inputRef = useRef();

    function handleInput(e){
        settask({...task, enteredTask:inputRef.current.value, id:Date.now()})
    }

    function handleTask(e) {
        e.preventDefault();
        dispatch(ADD(task));
        inputRef.current.value = "";
    }
    return (
        <div className="row mt-3">
            <div className="col-5 m-auto border border-warning border-2 py-2 d-flex justify-content-center bg-warning">
                <form onSubmit={handleTask}>
                    <input type="text" placeholder='add your task...' onChange={handleInput} ref={inputRef} name='task' className='me-2' />
                    <button className="btn btn-primary" type='submit'>Add task</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodos