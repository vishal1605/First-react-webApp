import React, { useEffect, useState } from 'react'


function Effect(param) {

    useEffect(()=>{
        console.log("effect");
        console.log(param.changeValue);
    },[param.changeValue]);

  return (
      <div className="row">
          <div className="col">
              <h1>Effect</h1>
          </div>
      </div>
    
  )
}

export default Effect