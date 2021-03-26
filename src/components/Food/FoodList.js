import React, { useEffect, useState } from "react";
import Axios from "axios";
import './FoodList.css';
import './Search.css'
const FoodList = () => {
    const [food, setFood] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setFilteredData(
      food.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      ));
  }, [search, food]);
    useEffect(() => {
      Axios.get("http://localhost:8000/api/food/").then((response) => {
        setFood(response.data);
        console.log(response.data);
      });
    }, []);
  
    return (
        <div>
         <div class="flexbox">
        <div class="search">
          <h1>Search this site</h1>
          <div>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }}  placeholder="Search . . ." required />
          </div>
        </div>
      </div>
      <div>
      {(filteredData.length == 0) ? <div>no result</div> :
        filteredData.map((food) => {
            return (
            <div key={food.id} class="card-container">
              <div class="card u-clearfix">
                <div class="card-body">
                  <span class="card-number card-circle subtle">
                    {food.quantity}
                  </span>
                  <span class="card-author subtle">{food.type}</span>
                  <h2 class="card-title">{food.name}</h2>
                  <span class="card-description subtle">
                    {food.cooked_at}
                    <br />
                    by: {food.business.name}<br/>
                    contact: {food.business.phone_number}<br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  
                    </span>
                  <div class="card-read"><a href={food.business.url}>business</a></div>
                  <span class="card-tag card-circle subtle">C</span>
                </div>
                <img
                  src={"http://localhost:8000/storage/" + food.image}
                  alt=""
                  class="card-media"
                />
              </div>
              <div class="card-shadow"></div>
            </div>
          );
        })}
      </div>
      </div>
    );
  };

export default FoodList
