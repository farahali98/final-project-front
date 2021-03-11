import React,{useState,useEffect} from 'react'
import {Router,Link,Route} from 'react-router-dom'
import Axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const url = "http://127.0.0.1:8000/api/register";
            const body = new FormData();
            body.append("name", name);
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
        <section class="login">
        <div class="titulo">Register</div>
        <form action="#" method="post" enctype="application/x-www-form-urlencoded">
        <input value={name} type="text" required title="name required" placeholder="name" data-icon="U" onChange={(e)=>{setName(e.target.value)}}/>
        <input value={email} type="text" required title="email required" placeholder="email" data-icon="U" onChange={(e)=>{setEmail(e.target.value)}}/>
              <input value={password} type="password" required title="Password required" placeholder="Password" data-icon="x" onChange={(e)=>{setPassword(e.target.value)}}/>
              <div class="olvido">
                <div class="col"><a href="#" title="Ver Carásteres">Register</a></div>
              </div>
              {/* <a href="#" class="enviar" onClick={handleRegister}>Submit</a> */}
          </form>
      </section>
    )
}

export default Register
