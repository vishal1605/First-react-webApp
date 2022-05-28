import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTask, ToggleBtn } from './redux-action/TaskAction';

function ListTodos() {

    const dispatch = useDispatch();

    const getData = useSelector((state) => state.allTasks);
    console.log(getData);

    function disableButton(e){
        const myId = Number(e.target.value);
        console.log(myId);
        dispatch(ToggleBtn(myId))

    }
    function deleteOperation(e){
        const myId = Number(e.target.value);
        console.log(myId);
        dispatch(DeleteTask(myId))

    }
    return (
        <div className="col-10 m-auto mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Task status</th>

                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData.map(obj => {
                            const { id, enteredTask, taskStatus } = obj;
                            return (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{enteredTask}</td>
                                    <td style={(taskStatus) ? { "color": "green" } : { "color": "red" }}>{(taskStatus) ? "completed" : "pending..."}</td>
                                    <td><button className='btn btn-danger me-1' disabled={!taskStatus} value={id} onClick={deleteOperation}>delete</button>
                                        <button className="btn btn-success" value={id} onClick={disableButton} disabled={(taskStatus)}>
                                            complete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>
        </div>
    )
}

export default ListTodos