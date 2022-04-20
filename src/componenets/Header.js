import React from "react";

function Header(props) {
    // console.log(props.details);
    let myValue = React.createRef();
    function showValue(e){
        console.log(e.target.classList);
        console.log(myValue.current.value);
        
    }
    return (
        
            <div className="row">
                <div className="col header">
                    <div className="logo">
                        <h1>WebApp</h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="/">{props.details.firstName}</a></li>
                            <li><a href="/">Blogs</a></li>
                            <li><a href="/">Doc</a></li>
                            <li><a href="/">About us</a></li>

                        </ul>
                    </div>
                    <div className="search-bar">
                        <input type="text" ref={myValue}/>
                        <button onClick={showValue} className="btn btn-success">search</button>
                    </div>
                </div>
            </div>


        

    );

}

export default Header;