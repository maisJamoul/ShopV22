import React from 'react';
import {Wrapper,CardItem} from '../../container/index';
import {HomeHero} from '../../section/index';
import {homeCards} from '../../../Data/HomeCards.js';
import {MenItems} from './../../../Data/MenCards.js'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 

import './Men.css';
function Men() {
  const options={ 
    type:'loop',
    perPage:3,  
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
    <div className="py-5" id="men">
      <h4 className="text-success text-center fw-bolder">Men</h4>
      <p className="text-center text-success">Details to details is what makes Hexashop different from the other themes</p>

      <Splide
          options={options}
          // hasTrack={true}
          className="splide "
        >
          {
            MenItems.map((item)=>{return(

            <SplideSlide className="slide p-2" key={item.id} >
              {/* <img src={item.img} className='p-1' alt={item.id} /> */}
              <CardItem item={item}/>
            </SplideSlide>
            )}
            )
          }  

        </Splide>

    </div>
  )
}

export default Men
