import React, { useState, useEffect } from 'react'
// import obj from '../componenets/all-data';

export default function Gallary(param) {


  const [obj, setObj] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/all-photos', {
      method: 'GET'
    })
      .then((res) => {
        if (res.ok) {
          console.log("success");
          return res.json();


        } else {
          throw Error("Not working" + " " + res.url);
        }

      }).then((data) => {
        data.forEach(element => {
          console.log(element);
        });
        setObj(data);
        // console.log(data);
      })
      .catch((err) => console.log("Error is here", err));
      

  }, [param.update])

  return (
    <div className="row mt-3 gallary">
      <div className="col all-images">
        {
          obj.map(data => {
            const { id, imageName, imageSize, className } = data;
            return (<div className={`photo-card ${className}`}>
              <img src={"/images/" + imageName} alt={id} />
            </div>)
          })
        }


      </div>
    </div>

  )
}
