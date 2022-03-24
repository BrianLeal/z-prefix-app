import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Page Imports
import Login from './Login.js';

//Component Imports
import NavBar from '../components/NavBar';


// function registrationSuccess(){
//     alert("Registration Successful")
// }

export default function Register (){
    
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();

    function handleSubmit(e){

        
        e.preventDefault();
          fetch('http://localhost:8080/users', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "POST",
            body: JSON.stringify({
              first_name: first_name,
              last_name: last_name,
              username: username,
              password: password,
             
            }),
          })
          .then((res) => res.json())
          .then(navigate("/login"))
          .catch((err) => console.log('error from fetch'))
          

    }

    return(
    <div className="forms">
        <NavBar />
        <h1>Register Your Account</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text"
                    onChange={(e) => setFirst_name((e.target.value))}/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input htmlFor="last_name" type="text"
                    onChange={(e) => setLast_name((e.target.value))}/>
                </p>
                <p>
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                    onChange={(e) => setUsername((e.target.value))}/>
                </p>
                <p>
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                    onChange={(e) => setPassword((e.target.value))}/>
                </p>  
                    <button type="submit" className = "submitBtn">Create Account</button> 
            </form>
    </div> 
    ) 

};