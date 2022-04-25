import React from 'react'
import obj from '../componenets/all-data';

export default function Gallary(props) {
  return (
    <div className="row mt-3 gallary">
        <div className="col all-images">
          {
            obj.map(data => {
              const { id, image, size } = data;
              return (<div className={`photo-card ${size}`}>
              <img src={"/images/"+image} alt={id} />
            </div>)
            })
          }


        </div>
      </div>

  )
}
