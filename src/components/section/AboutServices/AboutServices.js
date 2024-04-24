import React from 'react'
import {ServiceCard} from './../../container/index';
import {services} from './../../../Data/Services';
function AboutServices() {
  return (
    <div>
    <h1>Our Amazing Team</h1>
      <span>Details to details is what makes 
        Hexashop different from the other themes.
      </span>
      <div className="row my-3">
      {services.map((item)=>{
        return(
          <div className="col-md-4">
            <ServiceCard item={item} />
          </div>

        )
      }
      )}

      </div>
    </div>
  )
}

export default AboutServices
