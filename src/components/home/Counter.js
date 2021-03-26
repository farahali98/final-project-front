import React,{useState}from 'react'
import {Card} from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
    const [focus, setFocus] = useState(false);

    return (
        <Card style={{ height: "304px", backgroundColor: 'black', color: 'white' }}>
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
    )
}

export default Counter
