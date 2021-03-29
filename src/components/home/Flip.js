import React from 'react'
import './Flip.css'
const Flip = () => {
    return (
        <div className="App" style={{ display: 'flex', columnGap: '3%', paddingBottom:'8%'}}>
      <div className="flip-container">
        <div className="flip-this">

          <img alt="Godot icon" style={{height:'270px',maxWidth:'none'}} src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
          <div className="centered">
            <h2 style={{fontSize:'4rem',color:'white'}}> Donate</h2>
            <p >Help dave hungry children </p></div>

        </div>
      </div>


      <div className="flip-container">
        <div className="flip-this">

          <img alt="Godot icon" style={{height:'270px',maxWidth:'none'}} src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjB3YXN0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <div className="centered">
            <h2 style={{color:'white',fontSize:'4rem'}}> Waste</h2>
            <p>Minimize Food waste </p></div>

        </div>
      </div>
      <div className="flip-container">
        <div className="flip-this">

          <img alt="Godot icon" style={{height:'270px',maxWidth:'none'}} src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGRvbmF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <div className="centered">
            <h2 style={{color:'white',fontSize:'4rem'}}> Donate</h2>
            <p>Help dave hungry children </p></div>

        </div>
      </div>

    </div>
    )
}

export default Flip
