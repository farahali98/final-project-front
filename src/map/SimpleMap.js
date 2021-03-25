import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import { Map, Marker } from "pigeon-maps";
const SimpleMap = () => {
  const [ngos, setNgos] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/ngo").then((response) => {
      setNgos(response.data);
      console.log(response.data);
    });
  }, []);
  return (
     <Map height={300} defaultCenter={[33.8892846,35.4692627]} defaultZoom={11}>
      {ngos.map((ngo)=>{
      <Marker width={50} anchor={[ngo.xcoordinate,ngo.ycoordinate]} />
      })}
    </Map>
  )
}
export default SimpleMap;
