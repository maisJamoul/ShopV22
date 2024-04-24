import React from 'react';
import {HomeHero} from '../../section/index';

import {Men,Women,Kids} from './../index.js'
import './Page1.css';
function Page1() {

  return (<>
          <HomeHero />
          <div className='container'>
            <Men />
            <Women />
            <Kids />
          </div>
  
  </>
  )
}

export default Page1
