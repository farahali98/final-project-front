import React, { useState, useEffect } from 'react'
// import FooterPage from './FooterPage';
import CountUp from 'react-countup';
import { Card } from 'react-bootstrap'
import './Businesses.css'
import Axios from 'axios'
const About = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/business').then((response) => {
            setBusinesses(response.data);
            console.log(response.data)
        })

    }, [])




    return (




        <div>
            <div className="business-accounts">

            {businesses.map((business) => {
             return   <div key={business.id}className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="col-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div style={{width:'100px', radius:'50%'}} className="m-b-25"> <img src={"http://localhost:8000/storage/" + business.image} />
 </div>
                                                {console.log(business.image)}
                                                
                                                <h6 className="f-w-600">{business.name}</h6>
                                                <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Email</p>
                                                        <h6 className="text-muted f-w-400">{business.email}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Phone</p>
                                                        <h6 className="text-muted f-w-400">{business.phone_number}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Location</p>
                                                        <h6 className="text-muted f-w-400">{business.location}</h6>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <p className="m-b-10 f-w-600">Link</p>
                                                        <a className="text-muted f-w-400" href={business.url}>click</a>
                                                    </div>

                                                </div>

                                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
</div>
            {/* <FooterPage /> */}
        </div>
    )
}
export default About
