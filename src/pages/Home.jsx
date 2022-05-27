import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Home() {
  const [obj, setObj] = useState([]);
  const navigate = useNavigate();
  const [count, seCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/list', {
      method: 'GET'
    }).then((res) => {
      if (res.ok) {
        console.log("success");
        return res.json();


      } else {
        throw Error("Not working" + " " + res.url);
      }

    }).then((data) => {

      setObj(data);
      console.log(data);

    })
      .catch((err) => console.log("Error is here", err));

  }, [count]);

  const deleteOperation = (e)=>{
    console.log(e.target.value);

    fetch('http://localhost:8080/delete/'+e.target.value,{
      method:"GET"
    }).then(res=>res.text())
    .then(data=>{
      console.log(data);
      seCount(pre=>pre+1);

    }).catch(e=>console.log(e));

  }
  return (
    <div className="row">
      <div className="col-10 m-auto">
        <h1>All data</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">userName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {obj.map(data => {
              const { id, userName, email, password } = data;
              return (
                <tr>
                  <th scope="row">{id}</th>
                  <td>{userName}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <Link to={`update/${id}`} className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger mx-1" value={id} onClick={deleteOperation}>Delete</button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home