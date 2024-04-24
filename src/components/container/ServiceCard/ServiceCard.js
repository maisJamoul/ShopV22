import React from 'react'
import Card from 'react-bootstrap/Card';

function ServiceCard({item}) {
  return (
    <div>
        <Card key={item.id} >
        <Card.Body>   
            <Card.Title className="my-3 ">
                <p className="fs-6 fw-bold d-flex justify-content-center align-items-center">
                <span className="">{item.title}</span>
                </p>
                <p className="">{item.desc}</p>
            </Card.Title>
            <Card.Img variant="top" src={item.img} alt="..."/>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ServiceCard
