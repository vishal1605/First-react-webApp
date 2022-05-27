import React from 'react'

function List({ singleUser }) {
    const { state: users, dispatch } = singleUser;
    

    function deleteOperation(e){
        const user=users.find(obj=>{
            return obj.id===Number(e.target.value)
        })
        console.log(user);
        dispatch({type:'delete_user',payload:{user:user}})
    }


    return (

        <div className="col-7 m-auto mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(obj => {
                            const { id, firstName, lastName } = obj;
                            return (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td><button className='btn btn-danger' value={id} onClick={deleteOperation}>delete</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>

    )
}

export default List