import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import { Map, Marker } from "pigeon-maps";
const SimpleMap = () => {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/business").then((response) => {
      setBusiness(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
     <Map height={300} defaultCenter={[33.8892846,35.4692627]} defaultZoom={11}>
       {business.map((business)=>{
              return <Marker key={business.id} width={50} anchor={[business.xcoordinates,business.ycoordinates]} />

       })}
      {/* <Marker width={50} anchor={[33.8892846,35.4692627]} /> */}
    </Map>
  )
}
export default SimpleMap;
