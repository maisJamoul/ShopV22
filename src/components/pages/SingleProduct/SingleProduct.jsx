import {HomeHero} from '../../section/index';
// import {SingleCard} from '../../container/index';
import './SingleProduct.css';

const SingleProduct=({item})=>{

  return (
    <div>
      <HomeHero />
      <div className="row">
        <div className="col-md-4">
          {/* <SingleCard  item={item}>  
          </SingleCard> */}
        </div> 
      </div>
    </div>
  )
}

export default SingleProduct;
