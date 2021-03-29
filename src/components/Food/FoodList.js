import React, { useEffect, useState } from "react";
import Axios from "axios";
import './FoodList.css';
import './Search.css'
import SimpleMap from "../../map/SimpleMap";
import FooterPage from "../Footer/FooterPage";
const FoodList = () => {
  const [ngo,setNgo]=useState([])
  const [food,setFood]=useState([]);

  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/api/food').then((response) => {
        setFood(response.data);
        console.log(response.data)
    })

}, [])
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setFilteredData(
            food.filter((food) =>
                food.name.toLowerCase().includes(search.toLowerCase())
            ));
    }, [search, food])
const FoodNumber=food.length;

  
    return (
      <>
      <center>
      <div class="flexbox" >
          <div class="search">
            <h1>Search for a donation</h1>
            <div>
              <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }}  placeholder="Search . . ." required />
            </div>
          </div>
        </div>
  </center>
  <div class="wrapper" style={{display:'grid',gridAutoColumns:'auto',gridTemplateColumns:'1fr 1fr',columnGap:'10%',padding:'10%'}}>
  {(filteredData.length == 0) ? <div style={{ textAlign: "center", color: "red", fontSize: "20px", fontWeight: "bold" }}>no result found</div> :
          filteredData.map((food) => {    return <div key={food.id} class="outer">
      <div class="content animated fadeInLeft">
        <span class="bg animated fadeInDown">EXCLUSIVE</span>
        <h1>{food.name}<br/>{food.type}</h1>
        <p style={{	width: '280px',fontSize: '13px',lineHeight: '1.4',color: '#aaa',margin: '20px 0'}}>{food.cooked_at}</p>
        
        <div class="button">
          <a href={food.business.url}>{food.quantity}</a><a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i>visit donator</a>
        </div>
        
      </div>
      <img className="foodzie" src={"http://localhost:8000/storage/" + food.image} width="300px" class="animated fadeInRight"/>
    </div>
    })
    }
  </div>
  <SimpleMap/>
  <FooterPage/>
  </>
    );
  };

export default FoodList
