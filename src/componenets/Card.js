import React from "react";

function Card(props) {
    // console.log(props.allDetails[0].age);
    
    
    return (
        <div className="row mt-2">
            <div className="col car-section">
                <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5>{props.id}</h5>
                            <h5>{props.firstName}</h5>
                            <h5>{props.lastName}</h5>
                            <h5>{props.age}</h5>
                            <h5>{props.email}</h5>
                            <img src={"/images/"+props.profile} alt="avatar" height={200} />
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Card;