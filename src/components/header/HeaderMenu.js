import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const HeaderMenu = () => {
    return (
        <Navbar style={{backgroundColor:'black'}} expand="lg">
            <Navbar.Brand href="/" className='menutext'>Foodzie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ paddingLeft: '80%'}}>
                    {/* <Nav.Link style={{fontFamily:'QuikSans'}} href="/food" className='menutext'>Food</Nav.Link> */}
                    <Nav.Link href="/contributors" className='menutext'>Contributors</Nav.Link>
                    <Nav.Link href="/login" className='menutext'>Login</Nav.Link>
                    {/* <Nav.Link href="" className='menutext'>NGOs</Nav.Link> */}

               
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderMenu
