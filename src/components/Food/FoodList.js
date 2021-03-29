import React, { useEffect, useState } from "react";
import Axios from "axios";
import './FoodList.css';
import './Search.css'
import SimpleMap from "../../map/SimpleMap";
import FooterPage from "../Footer/FooterPage";
import {Link} from 'react-router-dom';
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

      <center style={{paddingBottom:'5%'}}>
        <Link to="/profile/ngo" style={{ display:'flex',color:'gray',fontWeight:'400px',fontSize:'1.5rem'}}> Back To Profile</Link>
      {/* <div className="flexbox" > */}
          <div className="search">
            <h1>Search for a donation</h1>
            <div>
              <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }}  placeholder="Search . . ." required />
            </div>
          </div>
        {/* =</div> */}
  </center>
  <center>
  <div className="wrapper" style={{backgroundColor:'black'}}>
  {(filteredData.length == 0) ? <div style={{ textAlign: "center", color: "red", fontSize: "20px", fontWeight: "bold" }}>no result found</div> :
          filteredData.map((food) => {    return <div key={food.id} className="outer">
      <div className="content animated fadeInLeft">
        <span className="bg animated fadeInDown">{food.cooked_at}</span>
        <h1 className="foodzie-title">{food.name}<br/>{food.type}</h1>
        <p className="foodzie-text"style={{	width: '280px',fontSize: '13px',lineHeight: '1.4',color: '#aaa',margin: '20px 0'}}></p>
        
        <div className="button">
          <a >{food.quantity}</a><a className="cart-btn" href={food.business.url}><i className="cart-icon ion-bag"></i>visit donator</a>
        </div>
        
      </div>
      <img className="foodzie"  src={"http://localhost:8000/storage/" + food.image} width="300px" />
    </div>
    })
    }
  </div>
  </center>
  {/* <SimpleMap/> */}
  <div style={{paddingTop:'15%',backgroundColor:'black'}}>
<FooterPage/>
</div>
  </>
    );
  };

export default FoodList
