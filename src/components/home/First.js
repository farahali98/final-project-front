import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Menu from '../menu/Menu'
import About from './About'
import Counter from './Counter'
import Flip from './Flip'
import Ads from './Ads'
import FooterPage from '../Footer/FooterPage'
import Testimonials from './Testimonials'
import HeaderMenu from '../header/HeaderMenu'
const First = () => {
    return (
        <div>
            <section className="bgimage parallex">
            {/* <HeaderMenu/> */}
<Menu/>
                <div className='parallex'>
                    <div className="container-fluid" style={{ position: 'absolute', paddingTop: '14%' }}>
                        <div className="row" style={{ textAlign: 'center', display: 'block', paddingLeft: '30%' }}>
                            <div>
                                <Card style={{ height: '300px', width: '500px', backgroundColor: 'white', opacity: '0.7' }}>
                                    <Card.Body style={{ paddingTop: '20%' }}><h5>Hello, world! Full width Hero-unit header</h5>
                                        <p style={{ letterSpacing: '1px', fontWeight: '300' }} >
                                            hello this is a dummy text to test stuff.
                                </p>
                                        <Button href="#About" variant="outline-dark">Learn more »</Button>

                                    </Card.Body>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <About />

            <div className="home-page" style={{ paddingBottom: '1%', paddingRight: '5%', paddingLeft: '5%', textAlign: 'center', letterSpacing: '1px', fontWeight: '300', backgroundColor: '#eeee' }} className="parallex" id="About">
                <h1 style={{ paddingTop: '5%' }} >About us</h1>
                <p style={{ paddingRight: '15%', paddingLeft: '15%', paddingBottom: '5%', fontFamily: 'Quicksand, serif', fontSize: '1.1rem', fontWeight:'300',paddingTop: '1%',lineHeight:'26px' }}>
                    In publishing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                    graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia
                </p>
                <Flip />
            </div>
            <Counter />
            <Ads />
            {/* <Testimonials /> */}
            <FooterPage />

        </div>
    )
}

export default First
