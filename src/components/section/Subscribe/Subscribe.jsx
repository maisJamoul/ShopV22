import React from 'react'
import './Subscribe.css';

function Subscribe() {
  return (
    <div className="container py-5">

      <div className="row my-5 text-start d-flex justify-content-center align-items-streach">
        <div className="col-md-7">
          
          <h3 className=" text-success fs-3 fw-bolder text-wrap ">
          By Subscribing To Our Newsletter You Can Get 30% Off
          </h3>
          <p className="SP">
          Details to details is what makes Hexashop different from the other themes.
          </p>
          <div className="row g-3">
            <div className="col-md-6 col-sm-12">
              <input type="text" placeholder='Your Name' className="fs-5 p-2 rounded form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className="col-md-6 col-sm-12">
              <input type="email" placeholder='Your Email' className="fs-5 p-2 rounded form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className="col-sm-12">
              <button className="btn p-2 fw-bold btn-success w-100">Subscribe</button>
            </div>
          </div>

          </div>

        <div className="col-md-5">
          <div className="row pt-2">
            <div className="col-md-6 ">

                <div className=" ">
                  <h5 className="fs-4 text-success">Store Location:</h5>
                  <p className="SPs">
                    Sunny Isles Beach, FL 33160, United States
                  </p>
                </div>
                <div className="">
                  <h5 className='text-success'>Phone:</h5>
                  <p className="SPs">010-020-0340</p>
                </div>
                <div className="">
                  <h5 className='text-success'>Office Location:</h5>
                  <p className="SPs">
                    North Miami Beach
                  </p>

              </div>
            </div>
            <div className="col-md-6 ">
                
              <div >
                <h5 className="fs-4 text-success">
                  Work Hours:
                </h5>
                <p className="SPs">
                  07:30 AM - 9:30 PM Daily
                </p>
              </div>
              <div className="">
                <h5 className='fs-4 text-success'>
                  Social Media:
                </h5>
                <p className="SPs">
                  Facebook, Instagram, Behance, Linkedin
                </p>
              </div>
              </div>

          </div> 

        </div>
      </div>
    </div>
  )
}

export default Subscribe
