import {Card,Button} from 'react-bootstrap';
import {useContext} from 'react';
import { StoreContext } from '../../../hooks/StoreContext';

const  BasketCard=({item}) =>{

  const { removeFromBasket}=useContext(StoreContext);
  const handleRemove=(item)=>{
    removeFromBasket(item);
  }
  
  return (
    <>
     <Card key={item.id} className='bg-warning' >
        <Card.Body>   
        <Card.Img variant="top" src={item.img} alt="..."/>
          <Card.Title className="my-3 text-start">
            <p className="fs-6 fw-bold float-end">
              <Button className="btn bg-success btn-sm text-white" onClick={(e)=>handleRemove(item)}>
                remove 
              </Button>
            </p>
            <p className="float-start text-success">${item.price}</p>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default BasketCard
