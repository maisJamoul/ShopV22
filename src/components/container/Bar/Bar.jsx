
import './Bar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { NavHashLink as LinkHash } from 'react-router-hash-link';
function Bar() {

  return (
    <>  
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand className='ms-3 text-success fw-bolder' href="/">
            Clothes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav ms-auto d-flex align-items center">
            <Nav
              className="ms-auto my-2 my-lg-0 fw-bold "
              navbarScroll
            >
              <Link className="ms-3 text-success" to="/"> Home</Link>
              <LinkHash className="ms-3 text-success" to="/#men">Men's</LinkHash>
              <LinkHash className="ms-3 text-success" to="/#women">Women's</LinkHash>
              <LinkHash className="ms-3 text-success" to="/#kids">Kids'</LinkHash>
              <Link className="ms-3 text-success" to="/about">About</Link>
              <Link className="ms-3 text-success" to="/contact">Contact</Link>
              <Link className="ms-3 text-success" to="/basket">Basket</Link>
              <Link to="/login" className=' mx-3 text-success fw-bolder'>Login</Link>
            </Nav>
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Bar