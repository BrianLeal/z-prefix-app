
import React, { useContext, useEffect, useState } from 'react';
import LoggedInNavBar from '../components/LoggedInNavBar';
import NavBar from '../components/NavBar';
import { SiteContext } from '../context/SiteData.js';


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


export default function Blogs () {

    const [postsArray, setPostsArray] = useState([]);
    const {currentUser } = useContext(SiteContext)
    // console.log('postsArray', postsArray);

    useEffect(() => {
        fetch(`http://localhost:8080/posts`)
        .then(response => response.json())
        .then((data) => setPostsArray(data))
        .catch((err) => console.error(err))
    }, []);        
    
    
    return postsArray.length > 0 ? ( 
    
        <div className="App">
            {currentUser ? <LoggedInNavBar /> : <NavBar />}
            <h1>All Blogs</h1>
            <Box data-testid="grid-container" sx={{ flexGrow: 1, paddingTop: 8, paddingBottom: 8 }}>
                <Grid container spacing={3} justifyContent="center">
                    {postsArray.map((i) => (
                        <>
                        <Grid item xs={8}> 
                            <BlogCards title={i.title} content={i.content} />
                        </Grid>
                        </>      
                    ))}
                </Grid>
            </Box>        
        </div>
    ) : (
        <h1>Internal Error</h1>
    )
};
