import React from 'react'
import { Card,Button } from 'react-bootstrap'
import"./productCart.scss"

const Product = ({id,image,desc,title,price}) => {
  return (
    <Card style={{width:"18rem",marginTop:"4rem"}}  className='productCard'>
      <Card.Img variant="top" src={require(`./img/${image}`)} style={{height:"300px"}}/>
      <Card.Body className='text=center d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text>
       {price} TL
        </Card.Text>
        <Button variant="danger">BUY</Button>
      </Card.Body>
    </Card>
  )
}

export default Product