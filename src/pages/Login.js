
//Login button immediatly links to routes (w/o verfication)

import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiteContext } from '../context/SiteData'

//PAGE IMPORTS
import Register from './Register.js';
import Blogs from './Blogs.js';

//Component Imports
import NavBar from '../components/NavBar';



export default function Login () {
    const {currentUser, setCurrentUser} = useContext(SiteContext)
    let navigate = useNavigate();


    function sendLogin(e){
        e.preventDefault()
    
        let username = e.target.form[0].value;
        let password = e.target.form[1].value;
        // console.log('username', username)
        // console.log('password', password)
     
        
        fetch(`http://localhost:8080/login`, {
             headers : { 
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            },
             method: "POST",
             body: JSON.stringify({
               username: username,
               password: password   
             })
         })
         .then((res) => res.json())
         .then(data => setCurrentUser(data))
         .then(navigate("/myblogposts"))
         .catch((err) => console.log(err))
     };

    return(
        
        <div className="forms">
            <NavBar />
            <h1>Please Login</h1>
            <form className="login-form">
                <p>
                    <label>Username:</label>
                    <input htmlFor="username" type="text" />
                </p>
                <p>
                    <label>Password:</label>
                    <input htmlFor="username" type="password" />
                </p>
                    <button onClick={e => sendLogin(e)} type="submit" className = "submitBtn">Login</button>
            </form>

            <h2>Don't have an account?</h2>
            <form>
                <Link to="/register" element={<Register />}>
                    <button type="button" className = "submitBtn">Register Here</button>
                </Link>
            </form>
        </div>
    )

};
