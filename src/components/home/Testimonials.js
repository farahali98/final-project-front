import React from 'react'
import './Testimonials.css'
const Testimonials = () => {
    return (
        <div class="container">
            <img src="https://images.unsplash.com/photo-1498962342534-ee08a0bb1d45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" alt="Snow" style={{ width: "100%" }} />
            <div class="centered">
                <img style={{ width: '30%', borderRadius: '50%' }} src="https://www.pngitem.com/pimgs/m/50-503554_business-girl-png-business-woman-images-png-transparent.png" />
                <h1>Farah Ali</h1>
                <h4>Manager</h4>
                <p>
                    ''Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.''
                    </p>
            </div>
        </div>
    )
}

export default Testimonials
