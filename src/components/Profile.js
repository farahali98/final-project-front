import React, {useState,useEffect} from 'react'
import "./Profile.css"
import Axios from 'axios'
import FooterPage from './Footer/FooterPage'
import { Menu } from '@material-ui/core'
const Profile = () => {
    const [ngo,setNgo]=useState([])
    const [business,setBusiness]=useState([]);
  
    useEffect(() => {
      Axios.get('http://127.0.0.1:8000/api/business').then((response) => {
          setBusiness(response.data);
          console.log(response.data)
      })
  
  }, [])
  
  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/api/ngo').then((response) => {
        setNgo(response.data);
        console.log(response.data)
    })
  
  }, [])
  return(
      <>
            <Menu/>

  <div class="main">
  <h1>Business Accounts</h1>
  <ul class="cards">

  {business.map((business)=>{
   return <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={"http://localhost:8000/storage/" + business.image}/></div>
        <div class="card_content">
          <h2 class="card_title">{business.name}</h2>
          <p class="card_text">{business.phone_number}</p>
          <button class="btn card_btn" href={business.url}>Read More</button>
        </div>
      </div>
    </li>
  })}
    
   
  </ul>

  <h1>Non-Profit Organizations</h1>
  <ul class="cards">

  {ngo.map((ngo)=>{
   return <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src={"http://localhost:8000/storage/" + ngo.image}/></div>
        <div class="card_content">
          <h2 class="card_title">{ngo.name}</h2>
          <p class="card_text">{ngo.phone_number}</p>
          <button class="btn card_btn"href={ngo.url}>Read More</button>
        </div>
      </div>
    </li>
  })}
  </ul>


</div>
    <FooterPage/>
   </>
    )
}

export default Profile
