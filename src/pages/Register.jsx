import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(param) {

    const navigate = useNavigate();

    // const [code, setCode] = useState(0);

    const [data, setData] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const [notice, setNotice] = useState(false);
    const [emailNotice, setEmailNotice] = useState(false);

    // const createCount = () => {
    //     setCount(pre => pre + 1);

    // }


    const handleName = (e) => {
        let val = e.target.name;
        console.log(typeof val);
        const a = param.listData.some(el => el[val].toLowerCase() === e.target.value.toLowerCase());
        console.log(a);
        setNotice(a);
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleEmail = (e) => {
        let val = e.target.name;
        console.log(typeof val);
        const a = param.listData.some(el => el[val].toLowerCase() === e.target.value.toLowerCase());
        console.log(a);
        setEmailNotice(a);
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handlePassword = (e) => {
        let val = e.target.name;
        console.log(val);
        setData({ ...data, [e.target.name]: e.target.value });

    }

    const submitForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/get-otp', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.text();


            } else {
                throw Error("Not working" + " " + res.url);
            }

        }).then((data) => {
            
            navigate('/processing');
        }).catch((err) => console.log("Error is here", err));
        
        console.log("form");

    }

    return (
        <div className="row register mt-4">
            <div className="col-5 m-auto pb-3">
                <h1 className='text-center'>Register</h1>

                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" name="userName" value={data.userName}
                            onChange={handleName} required />
                        <small className='text-danger'>{notice && "This username already taken"}</small>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={data.email}
                            onChange={handleEmail} required />
                        <small className='text-danger'>{emailNotice && "This email already taken"}</small>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={data.password}
                            onChange={handlePassword} required />
                    </div>

                    <button type="submit" className={`btn btn-primary ${(notice || emailNotice) && 'disable'}`}
                        >Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register