import React from 'react'
import './AboutHero.css';
import img1 from './../../../images/about-us-page-heading.jpg';

function AboutHero() {
  return (
    <>
    <div className="about  d-flex justify-content-center align-items-center">
      <div className="about-text text-white">
        <h1 className=" fw-bolder">
          About Our Company
        </h1>
        <span className="text-italic">
          Awesome, clean & creative HTML5 Template
        </span>
      </div>
{/* 
      <div className="border border-1">
        <div className="border border-1 ">
          <img src={img1} alt="baner" className="HImg1 img-fluid" />
        </div>
      </div> */}
    </div>
    </>
  )
}

export default AboutHero
