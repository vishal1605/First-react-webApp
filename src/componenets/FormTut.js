import React, { useState } from "react";

const FormTut = () => {

    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "select gender"
    });

    const [dataList, setDataList] = useState([]);

    function handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        // console.log(name + " : " + value);
        setUserDetails({ ...userDetails, [name]: value });

    }


    function submitForm(e) {
        e.preventDefault();
        if (userDetails.gender == 'select gender') {
            alert("Wrong input");
        } else {
            const user = { ...userDetails, date: new Date().getHours().toString() + ":" + new Date().getMinutes().toString() };
            // console.log(dataList);
            dataList.push(user);
            setDataList([...dataList]);
            console.log(dataList);
        }
        setUserDetails({
            username: "",
            email: "",
            password: "",
            age: "",
            gender: "select gender"

        });




    }


    return (
        <div className="row">
            <div className="col-5 m-auto">
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label className="form-label">UserName</label>
                        <input type="text" className="form-control" name="username" value={userDetails.username}
                            onChange={handleInput} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={userDetails.email}
                            onChange={handleInput} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={userDetails.password}
                            onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="text" className="form-control" name="age" value={userDetails.age}
                            onChange={handleInput} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select className="form-select" value={userDetails.gender} name="gender"
                            onChange={handleInput}>
                            <option>{userDetails.gender}</option>
                            <option >M</option>
                            <option >F</option>
                        </select>

                    </div>





                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default FormTut;