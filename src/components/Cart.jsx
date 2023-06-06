import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {remove} from '../features/cart';
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart = useSelector(state => state.cart)
  
  //total Price Array method reduce
  let totalPrice = cart.reduce((sum,x) => {
   return sum = sum + x.price       
  },0)
  
const dispatch = useDispatch()

const removebut = (id) => {
  dispatch(remove(id))
}

  return (
 


    <div>

    
      
      <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Product</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Rating</th>
          <th>Price</th>
          <th>bin</th>
        </tr>
      </thead>
  
      <tbody>
      {cart.length === 0 ? <p className='p-4'>Your Cart 🛒 is  Empty</p> : 
        cart.map((x) => {
          return (
            <tr>
            <td><img src={x.image} alt="" height={90}/></td>
            <td>{x.title}</td>
            <td>{x.category}</td>
            <td>{x.rating?.rate} out of {x.rating?.count}</td>
            <td>${x.price}</td>
            <td><Button variant="danger" onClick={() => removebut(x.id)}>Remove Item</Button></td>
          </tr>
          )
        })
     }
     <tr>
      <td>Billing</td>
      <td>Total Products : {cart.length}</td>
      <td>-</td>
      <td>-</td>
      <td>Total Price:<b>$ {totalPrice.toFixed(2)} </b> </td>
      <td><td><Button variant="primary">Order Now</Button></td></td>
     </tr>
      </tbody>
      
    </Table>

   
      
      
 

         
     

    </div>
  )
}

export default Cart