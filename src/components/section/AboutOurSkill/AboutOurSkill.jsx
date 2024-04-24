import React from 'react'
import './AboutOurSkill.css';
import img1 from './../../../images/about-left-image.jpg';

function AboutOurSkill() {
  return (
    <>
    <div className="container text-success my-5 d-flex justify-content-between align-items-center">
      <div className="p-5 HImg">
        <img src={img1} className='HImg' alt="" />
      </div>
      <div className="p-2 text-start">
        <h4 className=" fw-bolder ">
        About Us & Our Skills
        </h4>
        <p className="text-italic">
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do 
        eiusmod kon tempor incididunt ut labore.
        </p>
      </div>
    
    </div>
    </>
  )
}

export default AboutOurSkill
