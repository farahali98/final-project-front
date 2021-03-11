import React,{useState,useEffect} from 'react'
import {Router,Link,Route} from 'react-router-dom'
import Axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [authErr, setAuthErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [name,setName]=useState("");
  const [newName,setNewName]=useState("");


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
        await Axios.post("http://localhost:8000/api/login", {
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

          }



        });
      } catch (err) { console.log(err) };


    };
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const url = "http://127.0.0.1:8000/api/register";
        const body = new FormData();
        body.append("name", newName);
        body.append("email", email);
        body.append("password", password);
    
        await Axios
            .post(url, body, {
                headers: {
                    // "content-type": "multipart/form-data",
                    Accept: "application/json",

                },
            })

    } catch (error) {
        console.log(error)

    }
}

    return (

    <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
                <label htmlFor="email" className="label">Email</label>
					<input value={email}id="email" type="email" className="input" onChange={(e)=>{setEmail(e.target.value)}}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input value={password} id="pass" type="password" className="input" data-type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" defaultChecked />
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<button type="submit" onClick={HandleLogin} className="button" value="Sign In">
                        sign in
                        </button>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					{/* <a href="#forgot">Forgot Password?</a> */}
				</div>
			</div>
			<div className="sign-up-htm">
            <div className="group">
					<label htmlFor="pass" className="label">Admin Name</label>
					<input value={name} id="email" type="text" className="input" onChange={(e)=>{setName(e.target.value)}}/>
				</div>
				<div className="group">
					<label htmlFor="email" className="label">Email Adress</label>
					<input value={email}id="email" type="email" className="input" onChange={(e)=>{setEmail(e.target.value)}}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input value={password} id="pass" type="password" className="input" data-type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
				</div>
				
				
				<div className="group">
                <button type="submit" onClick={handleRegister} className="button" value="Sign Up">
                        Sign Up
                        </button>		
                        		</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div>
			</div>
		</div> 
	</div>
</div>
    )
}

export default Login
