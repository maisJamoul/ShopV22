import React from 'react'
import {Team} from './../../../Data/Team.js';
import {TeamCard} from './../../container/index'
function AboutTeam() {
  return (
    <div className="container text-success"> 
      <h3 className='text-bolder'>Our Amazing Team</h3>
      <span>Details to details is what makes 
        Hexashop different from the other themes.
      </span>
      <div className="row my-3">
      {Team.map((item)=>{
        return(
          <div className="col-md-4">
            <TeamCard item={item} />
          </div>

        )
      }
      )}

      </div>
    </div>
  )
}

export default AboutTeam
