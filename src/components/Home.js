import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
// import FooterPage from './FooterPage'
import TestimonialsPage from './TestimonialsPage'
import { FaHamburger } from 'react-icons/fa'
import CountUp from 'react-countup';
import { Card } from 'react-bootstrap';
import { Box } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import BurgerLogo from './hamburger.svg'
import Group from './Group'
// import Logos from './home/Logos'
import Boot from './Boot'
import Menu from './menu/Menu'
const Home = () => {
    const [focus, setFocus] = useState(false);

    return (
        <div>
            <section className="bgimage parallex">
                <Menu />
                <div className='parallex'>
                    <div className="container-fluid" style={{ position: 'absolute', paddingTop: '14%' }}>
                        <div className="row" style={{ textAlign: 'center', display: 'block' }}>
                            <div>
                                <Card style={{ height: '300px', width: '500px', backgroundColor: 'white', opacity: '0.7' }}>
                                    <Card.Body style={{ paddingTop: '20%' }}><h5>Hello, world! Full width Hero-unit header</h5>
                                        <p style={{ fontStyle: 'italic', letterSpacing: '1px', fontWeight: '300' }} >
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
            <section style={{ paddingTop: '50px' }}>

            </section>


            <section >
                <div className="home-page" style={{ paddingRight: '5%', paddingLeft: '5%', textAlign: 'center', letterSpacing: '1px', fontWeight: '300' }} className="parallex" id="About">
                    <h1 >About us</h1>
                    <p style={{ paddingRight: '15%', paddingLeft: '15%', paddingBottom: '5%', paddingTop: '1%' }}>
                        In publishing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia
                </p>
                    <div>
                        <div className='reasons' style={{ display: 'flex', columnGap: '15%', paddingBottom: '50px' }}>
                            <div className="icons">
                                <img style={{ height: '40%', width: '15%' }} src={BurgerLogo} />
                                <p style={{ color: '#A9A9A9' }}>by donating you will be preventing a big problem which is food waste</p>


                            </div>
                            <div className="icons">
                                <img style={{ height: '40%', width: '15%' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0KX8uujg1eggv3D1qjZ8qnssUl1gAdfc_Q&usqp=CAU' />
                                <p style={{ color: '#A9A9A9' }}>by donating you will be preventing a big problem which is food waste</p>


                            </div>
                            <div className="icons">
                                <img style={{ height: '40%', width: '15%' }} src={BurgerLogo} />
                                <title>Food</title>
                                <p style={{ color: '#A9A9A9' }}>by donating you will be preventing a big problem which is food waste</p>


                            </div>
                        </div>

                    </div>

                </div>


                <h1>Why work with us?</h1>
                {/* <Logos /> */}
                <Card style={{ height: "304px", backgroundColor: '#f04f47', color: 'white' }}>
                    <Card.Body style={{ display: 'flex', columnGap: '17%', fontSize: '2rem', justifyContent: 'center', marginTop: '8%' }}>
                        <div className='counter' style={{ display: 'flex', columnGap: '10%' }}>

                            <CountUp start={focus ? 0 : null} end={100} duration={5} redraw={true}>
                                {({ countUpRef }) => (
                                    <div >
                                        <span ref={countUpRef} />
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <a>+</a>
                                        </VisibilitySensor>
                                    </div>
                                )}
                            </CountUp>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>happy</h4>
                                <h4 style={{ fontWeight: '800' }}>Families</h4>
                            </div>

                        </div>
                        <div className='counter' style={{ display: 'flex', columnGap: '10%' }}>

                            <CountUp start={focus ? 0 : null} end={50} duration={5} redraw={true}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <a>+</a>
                                        </VisibilitySensor>
                                    </div>
                                )}
                            </CountUp>
                            <div className='description' style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Food</h4>
                                <h4 style={{ fontWeight: '800' }}>Posts</h4>
                            </div>

                        </div>
                        <div className='counter' style={{ display: 'flex', columnGap: '10%' }}>

                            <CountUp start={focus ? 0 : null} end={100} duration={5} redraw={true}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <a>+</a>
                                        </VisibilitySensor>
                                    </div>
                                )}
                            </CountUp>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>happy</h4>
                                <h4 style={{ fontWeight: '800' }}>Families</h4>
                            </div>

                        </div>
                    </Card.Body>

                </Card>

                <div className="rotation" style={{ display: 'flex', columnGap: '5%' }}>
                    <div className="flip-container">
                        <div className="flip-this">

                            <img alt="Godot icon" src="https://images.unsplash.com/photo-1571039904131-0239647d05f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVuZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <div className="centered">
                                <h5> Donate</h5>
                                <p> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also </p></div>

                        </div>
                    </div>



                    <div className="flip-container">
                        <div className="flip-this">


                            <img alt="Godot icon" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <div className="centered">
                                <h5>Do good</h5>
                                <p>Lorem Ipsu It has survived not only five centuries, but also </p></div>

                        </div>
                    </div>
                </div>

                <Boot />


                {/* <h2 className="page-title" style={{textAlign:'center'}}>Testimonials</h2>



                <div className="partners" style={{  display: 'flex', height: "304px", display: 'flex', columnGap: '15%'}}>

                    <h2 style={{ backgroundColor:'#f04f47', paddingTop:'150px',width:'50%',justifyContent:'center',color:'white' }}>Our Partners</h2>
                    <div style={{ display:'flex', columnGap:'20%', paddingTop:'140px', height:'50px',width:'50px',borderRadius:'50%'}} className='logos'>
                        <img src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' />
                    </div>
                </div> */}
                <div style={{ paddingBottom: '100px' }}>



                </div>





            </section>
            {/* <h2 className="page-title"> Our Team</h2>
<Group/> */}
            {/* <FooterPage /> */}
        </div>
    )
}

export default Home
