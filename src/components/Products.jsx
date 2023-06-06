import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import {useDispatch} from 'react-redux' 
import {add} from '../features/cart'

const Products = () => {

const [products,setProducts] = useState([])

useEffect(() => {
 const fetchItems = async() => {
   const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
    console.log(data)
 }
 fetchItems()
},[])

const dispatch = useDispatch()

const getProduct = (product) => {
   dispatch(add(product))
}

    return (
        <div>
            <Container>
                <Row className='my-4'>
                    {products.map((x) => {
                        
                        //Shorting the description
                        let des = x.description

                        return (
                            <Col sm={8}  md={6} lg={3}>
                            <Card style={{ width: '18rem',margin:"20px 2px" }}>
                                <Card.Img variant="top" src={x.image} style={{maxHeight:"250px"}} />
                                <Card.Body>
                                    <Card.Title>{x.title}</Card.Title>
                                    <Card.Text>
                                       {des.substring(0,135)}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => getProduct(x)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                   
                </Row>

            </Container>


        </div>
    )
}

export default Products