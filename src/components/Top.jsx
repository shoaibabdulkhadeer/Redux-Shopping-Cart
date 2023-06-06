import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Top = () => {

  const cart = useSelector(state => state.cart)

  return (

    <div>
 <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1isaIyRU2sdtzSGVfftAvdNKjQzq82p63mw&usqp=CAU" 
        alt=""
        height={40}
        className='mx-4 my-2'
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-3 my-3 my-lg-0" style={{fontSize:"22px"}}>

            <Nav.Link >
                <Link to='/' style={{textDecoration:"none"}}>Home </Link>
             </Nav.Link>

            <Nav.Link > 
                <Link to='/cart' style={{textDecoration:"none"}} >🛒<b style={{color:"black"}}>{cart.length} </b></Link>
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Top