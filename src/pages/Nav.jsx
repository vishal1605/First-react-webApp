import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav(para) {
  // const [obj, setObj] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:8080/list', {
  //     method: 'GET'
  //   }).then((res) => {
  //     if (res.ok) {
  //       console.log("success");
  //       return res.json();


  //     } else {
  //       throw Error("Not working" + " " + res.url);
  //     }

  //   }).then((data) => {
  //     data.forEach(element => {
  //       console.log(element);
  //     });
  //     setObj(data);
  //     // console.log(data);

  //   })
  //     .catch((err) => console.log("Error is here", err));
  // }, [])


  // setTimeout(function fetchList() {
  //   para.funData(obj);

  // }, 500)


  return (
    <div className="row nav-bar">
      <div className="col">
        <div className="logo">
          <h1>BootApp</h1>
        </div>
        <div className="home">
          <Link to="/">Home</Link>
        </div>
        <div className="links">
          {/* <Link to="/">Register</Link>
          <Link to="/">Login</Link> */}
          <Link to="/add">Add data</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav