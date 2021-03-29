import React from 'react'
import FooterPage from './Footer/FooterPage'
import HeaderMenu from './header/HeaderMenu'
import {Button} from 'react-bootstrap'
const Prep = () => {
    return (
        <div>
            <HeaderMenu/>
            <h2 style={{textAlign:'center',paddingTop:'1%'}}>Join our family</h2>
        <div style={{display:'flex',justifyContent:'center',columnGap:'20%',padding:'10%'}}>
            <div className='prep' style={{justifyContent:'center'}}>
             <p >Login as a Business Account</p>
             <img style={{paddingBottom:'10px',margin:'27px'}}src='https://image.flaticon.com/icons/png/128/857/857681.png'/>
             <br/>
             <Button style={{backgroundColor:'black',borderColor:'transparent'}} href='/login/business'>Login</Button>
            </div>
            <div className='prep' style={{justifyContent:'center'}}>
             <p >Login as a Non Profit Account</p>
             <img style={{paddingBottom:'10px',margin:'27px'}}src='https://image.flaticon.com/icons/png/128/2871/2871415.png'/>
             <br/>
             <Button style={{backgroundColor:'black',borderColor:'transparent'}} href='/login/ngo'>Login</Button>
            </div>
        </div>
        <FooterPage/>
        </div>
    )
}

export default Prep
