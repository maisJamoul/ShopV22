import React from 'react'
import { useContext} from 'react';

import { StoreContext } from '../../../hooks/StoreContext';
import './CardItem.css'

function CardItem({item}) {
  const {addToBasket}=useContext(StoreContext);
  const handleAdd=(item)=>{
    addToBasket(item);
  }
  return (
    <>
      <div className="card-item px-md-2 p-sm-3 px-lg-3 bg-success">
        <div className="card-wrapper">
          <div className="card-img">
            <img src={item.img} className="img" alt={item.id} />
          </div>
        </div>
        <div className="card-header text-center d-flex justify-content-around align-items-center">
          <p className="m-0 text-white">Price : <span className="text-white fw-bold">{item.price} $</span></p>
          <button className='btn text-success bg-white btn-sm m-0 ' onClick={(e)=>handleAdd(item)}>Add </button>
        </div>
      </div>
    </>
  )
}

export default CardItem
