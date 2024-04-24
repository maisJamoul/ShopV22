import React from 'react';
import './Explore.css';

import {EImgs} from './../../../Data/ExploreImgs'
function Explore() {
  return (
    <>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 text-start f-bold">
            <h3 className="f-bold py-3 text-success fw-bolder">
            Explore Our Products
            </h3> 
            <div className="EDesc py-3 fs-6 text-secondary text-success">
              <p>
              You are allowed to use this HexaShop HTML CSS template. 
              You can feel free to modify or edit this layout. You can convert
              this template as any kind of ecommerce CMS theme as you wish. 
              </p>

              <p>
              You are not allowed to redistribute this 
              template ZIP file on any other website.
              </p>

              <p>
              There are 5 pages included in this HexaShop Template and 
              we are providing it to you for absolutely free of charge
              at our TemplateMo website. There are web development costs for us.
              </p>

              <p>
              If this template is beneficial for your website or business, 
              please kindly support us a little via PayPal. 
              Please also tell your friends about our great website. Thank you.
              </p>

            </div>

        </div>
        <div className="col-md-6">
          <div className="row g-0">
            {EImgs.map((item)=>
            <div className="col-6">
              <div className="EImg ">
                <img src={item.img} className='p-0 m-0' alt="" />
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Explore
