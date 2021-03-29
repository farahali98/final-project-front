import React, { useState, useEffect } from "react";
import "./Profile.css";
import Axios from "axios";
import FooterPage from "./Footer/FooterPage";
import { Button } from "react-bootstrap";
import HeaderMenu from './header/HeaderMenu'
import Ads from "./home/Ads";
const Profile = () => {
  const [ngo, setNgo] = useState([]);
  const [business, setBusiness] = useState([]);
  const [filteredBusiness, setFilteredBusiness] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredNgo, setFilteredNgo] = useState([]);
 const [searchNgo,setSearchNgo]=useState('');
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/business").then((response) => {
      setBusiness(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    setFilteredBusiness(
      business.filter((business) =>
        business.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, business]);

  const BusinessNumber = business.length;

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/ngo").then((response) => {
      setNgo(response.data);
      console.log(response.data);
    });
  }, []);


  useEffect(() => {
    setFilteredNgo(
      ngo.filter((ngo) =>
        ngo.name.toLowerCase().includes(searchNgo.toLowerCase())
      )
    );
  }, [searchNgo, business]);
  return (
    <>
              <HeaderMenu/>

      <div className="main">
        <h1 style={{ paddingTop:'5%' }}>Get to know our Donators</h1>
        <p style={{}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
        {/* <Ads/> */}

        <h1 style={{backgroundColor:'black',color:'white',padding:'15px'}}>Business Accounts</h1>
        {/* <div className="flexbox" > */}
        <center>
          {" "}
          <div className="search">
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Business Accounts . ."
                required
              />
            </div>
          </div>
        </center>
        {/* =</div> */}
        <ul className="inds">
        {(filteredBusiness.length == 0) ? <div style={{ justifyContent:'center', textAlign: "center", color: "red", fontSize: "20px", fontWeight: "bold" }}>no result found</div> :
        filteredBusiness.map((business) => {
            return (
              <li className="inds_item">
                <div className="ind">
                  <div className="ind_image">
                    <img
                      src={"http://localhost:8000/storage/" + business.image}
                    />
                  </div>
                  <div className="ind_content">
                    <h2 className="ind_title">{business.name}</h2>
                    <p className="ind_text">{business.phone_number}</p>
                    <a href={business.url}>
                      <button className="btn card_btn">Read More</button>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <center>
        <button
          className="join"
          style={{
            margin: "30px",
            width: "100px",
            padding: "15px",
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
          }}
        >
          join us
        </button>
        </center>

        <h1 style={{backgroundColor:'black',color:'white',padding:'15px'}}>Non-Profit Organizations</h1>
        <center>
          {" "}
          <div className="search">
            <div>
              <input
                type="text"
                value={searchNgo}
                onChange={(e) => {
                  setSearchNgo(e.target.value);
                }}
                placeholder="Search Non Profit. . ."
                required
              />
            </div>
          </div>
        </center>
        <ul className="inds">
        {(filteredNgo.length == 0) ? <div style={{justifyContent:'center', textAlign: "center", color: "red", fontSize: "20px", fontWeight: "bold" }}>no result found</div> :
        filteredNgo.map((ngo) => {            return (
              <li className="inds_item">
                <div className="ind">
                  <div className="ind_image">
                    <img src={"http://localhost:8000/storage/" + ngo.image} />
                  </div>
                  <div className="ind_content">
                    <h2 className="ind_title">{ngo.name}</h2>
                    <p className="ind_text">{ngo.phone_number}</p>
                    <a href={ngo.url}>
                      {" "}
                      <button className="btn card_btn">Read More</button>{" "}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <center>
        <button
          className="join"
          style={{
            margin: "30px",
            width: "100px",
            padding: "15px",
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
          }}
        >
          join us
        </button>
        </center>
      </div>
      <FooterPage />
    </>
  );
};

export default Profile;
