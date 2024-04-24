import React from 'react'
import './Footer.css';
import logo from './../../../images/white-logo.png'
function Footer() {
  return (<>
    <div className="row foot mt-5 text-start px-5 pt-5 lh-lg text-white bg-success">
      <div className="col-md-3 text-white fw-bolder">
        <h3>Clothes</h3>
        <ul className="">
            <li >
                <a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a>
            </li>
            <li>
                <a href="#">0-020-0340</a>
            </li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Shopping & Categories</h5>
        <ul>
            <li>
                <a href="#">Men's Shopping </a>
            </li>
            <li>
                <a href="#"> Women's Shopping</a>
            </li>
            <li>
                <a href="#">Kid's Shopping</a>
            </li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Useful Links</h5>
        <ul>
            <li>
                <a href="#">Home Page</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Help Information</h5>
        <ul>
            <li>
                <a href="#">Help</a>
            </li>
            <li>
                <a href="#">FAQ's</a>
            </li>
            <li>
                <a href="#">Shipping</a>
            </li>
            <li>
                <a href="#">Tracking ID</a>
            </li>
        </ul>
      </div>
      <div className='p-1'>
        <hr />

      </div>
    </div>
    <div className="text-light pb-3 text-white bg-success d-flex justify-content-center align-items-center">
        Copyright © 2024. All Rights Reserved.
    </div>
  </>
  )
}

export default Footer
