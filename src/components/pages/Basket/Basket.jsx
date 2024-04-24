
import {useContext} from 'react';
import { StoreContext } from '../../../hooks/StoreContext';
import {BasketCard} from './../../container/index';

const Basket=()=>{
  const {total,products}=useContext(StoreContext);
  return (
      <div className="basket py-5">
    <div className="container ">
        <div className="row basket mx-0 py-5">
        <h4 className='text-success text-center fw-bold'>Total : {total}$</h4>
          {products.map((item)=>
            <div className="col-md-4" key={item.id}>
              <BasketCard  item={item}/>
            </div>

          )}  
        </div>
      </div>

    </div>
  )
}

export default Basket
   