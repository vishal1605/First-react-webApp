import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="row">
                <div className="col header">
                    <div className="logo">
                        <h1>WebApp</h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='blog'>Blog</Link></li>
                            <li><Link to='document'>Doc</Link></li>
                            <li><Link to='about-us'>About us</Link></li>

                        </ul>
                    </div>
                    <div className="search-bar">
                        <input type="text" />
                        <button className="btn btn-success">search</button>
                    </div>
                </div>
                
            </div>
  )
}

export default Menu