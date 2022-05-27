import React, { useState } from 'react';

function Otp() {

    console.log("Otp");

    const submitOtp = (e) => {
        const code = document.getElementById('code').value;
        console.log(code);
        e.preventDefault();

            fetch('http://localhost:8080/register', {
                method: 'POST',
                body: code,
                headers: {
                    'Content-type': 'text/plain',
                    'credentials':'same-origin'
                }
                
            }).then(res=>{
                return res.text();
            }).then(data=>{
                console.log(data);
            }).catch((err) => console.log("Error is here", err));

        

    }
    return (
        <div className="row get-otp">
            <div className="col-5 m-auto">
                <form onSubmit={submitOtp}>
                    <div className="mb-3">
                        <label className="form-label">Enter OTP</label>
                        <input type="text" className="form-control" id="code" required />


                    </div>
                    <button type="submit" className='btn btn-primary'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Otp