import React from 'react'
import './Ads.css'
const Ads = () => {
    return (
        <div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{TextAlign: "center"}}>
                    <h1 style={{padding:'5%',paddingLeft:'5%'}} >Why Work With Us?</h1>
        <div className="row" style={{justifyContent: "center",display:'flex',columnGap:'5%'}}>
            <div className="card col-md-3 col-12">
                <div className="card-content">
                    <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                        <div className="shadow"></div>
                        <div className="card-title" style={{fontSize:'30px'}}> We're Free </div>
                        <div className="card-subtitle">
                            <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-md-3 col-12 ml-2">
                <div className="card-content">
                    <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                        <div className="card-title"  style={{fontSize:'30px'}}> We're Unbiased </div>
                        <div className="card-subtitle">
                            <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-md-3 col-12 ml-2">
                <div className="card-content">
                    <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                        <div className="card-title"  style={{fontSize:'30px'}}> We Guide you </div>
                        <div className="card-subtitle">
                            <p> <small className="text-muted">eir life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    )
}

export default Ads
