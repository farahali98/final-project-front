import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './menu.css'
const Menu = () => {
    return (
        <div>
             <div className="menu-container">

<input type="checkbox" id="openmenu" className="hamburger-checkbox" />

<div className="hamburger-icon">
  <label for="openmenu" id="hamburger-label">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>

<div className="menu-pane">

  <Nav expand="lg" style={{display: 'flex', flexDirection: 'column', paddingLeft: '10%', textAlign: 'center', paddingTop: '30%' }}>
  <Nav.Link style={{textDecoration:'none'}} href="/businesses" className='menutext'>Businesses</Nav.Link>
  <Nav.Link href="/ngos" className='menutext'>NGOs</Nav.Link>
  <Nav.Link href="/login" className='menutext'>Login</Nav.Link>
  <Nav.Link href="/ngos" className='menutext'>NGOs</Nav.Link>
     <Nav.Link href="/food" className='menutext'>Food</Nav.Link>
  </Nav>


</div>

</div>
        </div>
    )
}

export default Menu
