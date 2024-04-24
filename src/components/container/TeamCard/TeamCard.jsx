import React from 'react'


function TeamCard({item}) {
  return (

      <div className="card-item px-md-2 p-sm-3 px-lg-3 bg-dark">
        <div className="card-wrapper">
          <div className="card-img">
            <img src={item.img} className="img" alt={item.id} />
          </div>
        </div>
        <div className="card-header text-center d-flex justify-content-around align-items-center">
          <p className="m-0 text-white">{item.job}</p>
  
        </div>
      </div>
  )
}

export default TeamCard
