import React from 'react';
import './Wrapper.css';
function Wrapper({item,children}) {
  return (
    <>
      <div className="my-3" >
        <h3 className="pt-2 text-start fw-bolder">{item.name} Latest</h3>
        <p className="mb-2 text-start fst-italic text-body-secondary">{item.desc}</p>
        
        {children}

      </div>
    </>
  )
}

export default Wrapper
