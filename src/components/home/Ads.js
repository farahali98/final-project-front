import React from 'react'
import './Ads.css'
const Ads = () => {
    return (
        <div class='container-fluid mx-auto mt-5 mb-5 col-12' style={{TextAlign: "center"}}>
                    <h1 style={{padding:'5%',paddingLeft:'35%'}} >Why Word With us</h1>
        <div class="row" style={{justifyContent: "center",display:'flex',columnGap:'5%'}}>
            <div class="card col-md-3 col-12">
                <div class="card-content">
                    <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                        <div class="shadow"></div>
                        <div class="card-title" style={{fontSize:'30px'}}> We're Free </div>
                        <div class="card-subtitle">
                            <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card col-md-3 col-12 ml-2">
                <div class="card-content">
                    <div class="card-body"> <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
                        <div class="card-title"  style={{fontSize:'30px'}}> We're Unbiased </div>
                        <div class="card-subtitle">
                            <p> <small class="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card col-md-3 col-12 ml-2">
                <div class="card-content">
                    <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                        <div class="card-title"  style={{fontSize:'30px'}}> We Guide you </div>
                        <div class="card-subtitle">
                            <p> <small class="text-muted">eir life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    )
}

export default Ads
