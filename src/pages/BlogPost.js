import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiteContext } from '../context/SiteData'

//Components Import
import NavBar from '../components/NavBar';
import LoggedInNavBar from '../components/LoggedInNavBar.js';

//Pages Import
import MyBlogPosts from './MyBlogPosts';

export default function BlogPost () {

        const navigate = useNavigate();
       
        const [title, setTitle] = useState("")
        const [content, setContent] = useState("")
        
       //reseed posts to include created column
       const { currentUser } = useContext(SiteContext)
    
        function handleSubmit(e){
            console.log('checking handlesubmit', title, content)

            e.preventDefault();
              fetch('http://localhost:8080/posts', {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 },
                method: "POST",
                body: JSON.stringify({
                  user_id: currentUser.id,
                  title: title,
                  content: content,
                }),
              })
              .then((res) => res.json())
              .then(navigate("/myblogposts"))
              .catch((err) => console.log('error from fetch'))
            }
    
    return currentUser ? (
        <div className="forms">
            <LoggedInNavBar />
            <h2>New Blog Post</h2>
                <form className='post-form' onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="title">Title:</label>
                        <input type="text" 
                        onChange ={(e) => setTitle(e.target.value)}/>
                    </p>
                    <p>
                        <label htmlFor="content">Content:</label>
                        <input type="text" 
                        onChange ={(e) => setContent(e.target.value)}/>
                    </p>
                    {/* <p>
                        GET from /posts
                        <label>Created On:</label>
                        <input htmlFor="created" type="text" 
                        onChange ={(e) => setUsername((e.target.value))}/>
                    </p> */}
                <button type="submit" className = "submitBtn">Submit Post</button>
             </form>
        </div>
    ) : (
        <>
        <NavBar />
        <div>Please login to create a post</div>
        </>
        )
}

//