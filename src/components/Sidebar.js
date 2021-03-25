import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
const Sidebar=() => {
  return (
    <Navbar bg="transparent" expand="lg">
    <Navbar.Brand href="/" className='menutext'>Food Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" style={{paddingLeft:'50%'}}>
        <Nav.Link href="/businesses" className='menutext'>Businesses</Nav.Link>
        <Nav.Link href="/ngos" className='menutext'>NGOs</Nav.Link>
        <Nav.Link href="/login" className='menutext'>Login</Nav.Link>
        <Nav.Link href="/ngos" className='menutext'>NGOs</Nav.Link>

        <NavDropdown title="Donations" id="basic-nav-dropdown">
          <NavDropdown.Item href="/food" className='menutext'>Food</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2" className='menutext'>Clothe</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3" className='menutext'>Appliances</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
export default Sidebar;