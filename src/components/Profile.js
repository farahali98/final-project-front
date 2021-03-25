import React, {useState,useEffect} from 'react'
import "./Profile.css"
import Axios from 'axios'
const Profile = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/business').then((response) => {
            setBusinesses(response.data);
            console.log(response.data)
        })

    }, [])
    return (
        <div className="profiles">
        <div></div>
        {businesses.map((business) => {
         return   <div class="card" key={business.id}>
          <img src={"http://localhost:8000/storage/" + business.image} style={{width:"100%"}}/>
            <h1>{business.name}</h1>
            <p class="title">{business.phone_number}</p>
            <p>Harvard University</p>
            <a href={business.url}>Website</a>
            <p><button>Contact</button></p>
          </div>
        })}
        </div>
   
    )
}

export default Profile
