import React from 'react'
import './Flip.css'
const Flip = () => {
    return (
        <div className="App" style={{ display: 'flex', columnGap: '5%',paddingRight:'10%'}}>
      <div class="flip-container">
        <div class="flip-this">

          <img alt="Godot icon" src="https://images.unsplash.com/photo-1612203776570-e06d04b343d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80" />
          <div class="centered">
            <h2> Donate</h2>
            <p >Help dave hungry children </p></div>

        </div>
      </div>


      <div class="flip-container">
        <div class="flip-this">

          <img alt="Godot icon" src="https://images.unsplash.com/photo-1558384975-65d5c11c0adb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=335&q=80" />
          <div class="centered">
            <h2> Donate</h2>
            <p>Help dave hungry children </p></div>

        </div>
      </div>
      <div class="flip-container">
        <div class="flip-this">

          <img alt="Godot icon" src="https://images.unsplash.com/photo-1611712141499-e1921675b032?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80" />
          <div class="centered">
            <h2> Donate</h2>
            <p>Help dave hungry children </p></div>

        </div>
      </div>

    </div>
    )
}

export default Flip
