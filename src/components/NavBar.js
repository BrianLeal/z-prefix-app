import React from 'react';
import { Link } from 'react-router-dom';

//Page Imports
import Login from '../pages/Login.js';
//Styling
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';

import '../styling/blogs.css'


export default function NavBar() {
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
                            <Link to="/login" element={<Login />}>
                                <Button sx={{color: '#BCC3D0', fontWeight: 'bold'}} variant="contained" href="/login">Login</Button>
                            </Link>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </header>
    );
}