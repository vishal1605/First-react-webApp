import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Update() {
    const { id } = useParams();
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:8080/get/'+ id, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setInput(data);

            }).catch(e => console.log(e));
    }, []);

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/update', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(input)
        }).then(res => {
            return res.text();
        }).then(data => {
            console.log(data);
            navigate("/");
        })
            .catch(error => console.log(error));
    }
    return (
        <div className="row update">
            <div className="col-5 m-auto">
                <h1 className='text-center'>Update</h1>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" name="userName"
                            value={input.userName} onChange={handleInput} required />


                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={input.email}
                            onChange={handleInput} required />


                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password"
                            value={input.password} onChange={handleInput} required />
                    </div>

                    <button type="submit" className='btn btn-primary' >update</button>
                </form>
            </div>
        </div>
    )
}

export default Update