import React from 'react'
import './HomeHero.css';
import {HomeImgs} from './../../../Data/HeroImgs';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 

function HomeHero() {
  const options={ 
    type:'loop',
    perPage:2,  
    breakpoints: {
      640: {
        perPage: 1,
      },
  
    },
    padding:0,
    autoplay: true, 
    rewind :true,
    perMove:-1 }
  return (
    <>
    <div className="Hero">
    <Splide
          options={options}
          // hasTrack={true}
          className="splide bg-dark"
        >
          {
            HomeImgs.map((item)=>
            <SplideSlide className="slide" key={item.id} >
              <img src={item.img} className='p-1' alt={item.id} />
            </SplideSlide>
            )
          }  

        </Splide>
      
    </div>
    </>
  )
}

export default HomeHero
