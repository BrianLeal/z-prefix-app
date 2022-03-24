import React from 'react';
import { Link } from 'react-router-dom';

//Page Imports
import Login from '../pages/Login.js';
import Blogs from '../pages/Blogs.js';
import BlogPost from '../pages/BlogPost.js';
import MyBlogPosts from '../pages/MyBlogPosts';

//Styling
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';

//CSS Style
import '../styling/blogs.css'


export default function LoggedInNavBar() {
    return (
        <header className='app-header'>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <a href='/' style={{color: '#BCC3D0', textDecoration: "none"}}>
                        <h1>Blog Site</h1>    
                    </a>
                </Grid>
            <Grid item xs={12}>
                    <form>
                        <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '30em' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            
                            <Link to="/" element={<Blogs />}>
                                <Button sx={{color: '#BCC3D0', fontWeight: 'bold'}} variant="contained" href="/">View All Blog Posts</Button>
                            </Link>
                            <Link to="/blogpost" element={<BlogPost />}>
                                <Button sx={{color: '#BCC3D0', fontWeight: 'bold'}} variant="contained" href="/blogpost">Create A New Post</Button>
                            </Link>
                            <Link to="/myblogposts" element={<MyBlogPosts />}>
                                <Button sx={{color: '#BCC3D0', fontWeight: 'bold'}} variant="contained" href="/myblogposts">View My Blog Posts</Button>
                            </Link>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </header>
    );
}


