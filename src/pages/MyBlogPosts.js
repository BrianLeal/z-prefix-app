import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { SiteContext } from '../context/SiteData.js'

//Components Import
import NavBar from '../components/NavBar';
import LoggedInNavBar from '../components/LoggedInNavBar.js';

//Pages Import
import Blogs from './Blogs';

// GRID
import BlogCards from '../components/BlogCards.js';

//Styling
import { styled } from '@mui/material/styles';
import { 
    Box,
    Grid,
    LinearProgress
} from '@mui/material';

// CSS STYLE
import '../styling/blogs.css'; 

export default function MyBlogPosts () {
    const { currentUser } = useContext(SiteContext)

    // console.log('usersArray', usersArray);
    // console.log('Current User:', currentUser)

    const [postsArray, setPostsArray] = useState([]);
    console.log('postsArray', postsArray);


    useEffect(() => {
        if(!currentUser) return
        fetch(`http://localhost:8080/posts`)
        .then(response => response.json())
        .then((data) => setPostsArray(data.filter((post) => post.user_id === currentUser.id)))
        .catch((err) => console.error(err))
    }, [currentUser]);
  

    return currentUser ? (
    <div>
        <LoggedInNavBar />
        <h2>My Blog Posts</h2>
        <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3}>
                    {postsArray.map((i) => {
                        return (
                        <>
                        <Grid item xs={4}> 
                            <BlogCards title={i.title} content={i.content} />
                        </Grid>
                        </>      
                        )
                      })
                    }
                </Grid>
            </Box>
    </div>
    ) : (
    <>
    <NavBar />
    <div>Please login to view your posts</div>
    </>
    )

}