import React, { useState, useEffect } from 'react'
import { Router, Link, Route, Redirect } from 'react-router-dom'
import Axios from 'axios';
import HeaderMenu from '../components/header/HeaderMenu';
// import Menu from './menu/Menu'

const NgoLogin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [authErr, setAuthErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('')
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setEmailErr('email is invalid!')
      setPassErr('Password is invalid!');
      setAuthErr('');
    } else if (email && !password) {
      setEmailErr('');
      setPassErr('Password is invalid');
      setAuthErr('');
    } else if (!email && password) {
      setPassErr('');
      setEmailErr('email is invalid!');
      setAuthErr('');
    } else if (password.length < 6) {
      setPassErr('Password must containt at least 6 characters!')
      setAuthErr('');
      setEmailErr('');
    } else if (email.length < 5) {
      setEmailErr('email must containt at least 5 characters!')
      setAuthErr('');
      setPassErr('');
    } else if (email.length < 5 && password.length < 6) {
      setEmailErr('email must containt at least 5 characters!')
      setPassErr('Password must containt at least 6 characters!')
      setAuthErr('');
    } else {
      try {
        await Axios.post("http://localhost:8000/api/ngo/login", {
          email: email,
          password: password,

        }).then((response) => {
          setAuthErr(response.data.error + " email or Password");
          setEmailErr("");
          setPassErr("");
          setToken(response.data.access_token)
          {
            response.data &&
            response.data.access_token &&
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("id", response.data.user.id);
          }
        });
      } catch (err) { console.log(err) };


    };
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const link = "http://127.0.0.1:8000/api/ngo/register";
      const body = new FormData();
      body.append("name", name);
      body.append("email", email);
      body.append("password", password);
      body.append("location", location);
      body.append("url", url);
      body.append("image", image);
      body.append("phone_number", phoneNumber);
      await Axios
        .post(link, body, {
          headers: {
            // "content-type": "multipart/form-data",
            // Accept: "application/json",
            'content-type': 'multipart/form-data',
            'Authorization': "Bearer " + localStorage.getItem('token')
          }
        }).then((response) => {
          setToken(response.data.access_token)
          {
            response.data &&
            response.data.access_token &&
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem("id", response.data.user.id);
           
          }

        })

    } catch (error) {
      console.log(error)

    }
  }



  if (token) return <Redirect exact to="/profile/ngo" />

// if (token){
//   <Redirect exact to="/profile" />
// }
// else{
//   <Redirect exact to="/"/>
// }
  return (
    <>
          <HeaderMenu />

    <div>
      <h2 style={{textAlign:'center',paddingTop:'5%'}}>LOGIN AS A NON PROFIT ACCOUNT</h2>

      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="email" className="label">Email</label>
                <input value={email} id="email" type="email" className="input" onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input value={password} id="pass" type="password" className="input" data-type="password" onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              {/* <div className="group">
					<input id="check" type="checkbox" className="check" defaultChecked />
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				</div> */}
              <div className="group">
                <button style={{color:'black'}} type="submit" onClick={HandleLogin} className="button" value="Sign In">
                  sign in
                        </button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="name" className="label">Admin Name</label>
                <input value={name} id="email" type="text" className="input" onChange={(e) => { setName(e.target.value) }} />
              </div>
              <div className="group">
                <label htmlFor="email" className="label">Email Adress</label>
                <input value={email} id="email" type="email" className="input" onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input value={password} id="pass" type="password" className="input" data-type="password" onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className="group">
                <label htmlFor="location" className="label">location</label>
                <input value={location} id="location" type="link" className="input" data-type="text" onChange={(e) => { setLocation(e.target.value) }} />
              </div>
              <div className="group">
                <label htmlFor="website" className="label">Company Wbsite Link</label>
                <input value={url} id="website" type="link" className="input" data-type="text" onChange={(e) => { setUrl(e.target.value) }} />
              </div>


              <div className="group">
                <label htmlFor="tel" className="label">phone</label>
                <input id="phone" value={phoneNumber} type="tel" className="input" onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>

              <div className="group">
                <label htmlFor="image" className="label">image</label>
                <input id="image" type="file" className="input" data-type="file" onChange={(e) => setImage(e.target.files[0])} />
              </div>

              <div className="group">
                <button style={{color:'black'}} type="submit" onClick={handleRegister} className="button" value="Sign Up">
                  Sign Up
                        </button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1" style={{color:'white'}}>Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>)
}

export default NgoLogin
