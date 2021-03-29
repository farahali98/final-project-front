import React from 'react'
// import FooterPage from './FooterPage'
import {Button} from 'react-bootstrap'
const Prep = () => {
    return (
        <div>
            
        <div style={{display:'flex',justifyContent:'center',columnGap:'10%',padding:'10%'}}>
            <div className='prep' style={{justifyContent:'center'}}>
             <p >Login as a Business Account</p>
             <img style={{paddingBottom:'10px',margin:'27px'}}src='https://image.flaticon.com/icons/png/128/857/857681.png'/>
             <br/>

             <Button style={{marginLeft:'58px',backgroundColor:'#f04f47',borderColor:'transparent'}} href='/login'>Login</Button>
            </div>


            <div className='prep' style={{justifyContent:'center'}}>
             <p >Login as a Non Profit Account</p>
             <img style={{paddingBottom:'10px',margin:'27px'}}src='https://image.flaticon.com/icons/png/128/2871/2871415.png'/>
             <br/>

             <Button style={{marginLeft:'58px',backgroundColor:'#f04f47',borderColor:'transparent'}} href='/NgoLogin'>Login</Button>
            </div>
        </div>
        {/* <FooterPage/> */}
        </div>
    )
}

export default Prep
