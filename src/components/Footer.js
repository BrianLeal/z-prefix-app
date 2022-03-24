import React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';

import './components.css'

export default function Footer (){
    return (
        <>
         <header className='footer'>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h1>Blog Site</h1>
                </Grid>
                <Grid item xs={12}>
                    &copy; Brian Leal
                </Grid>
            </Grid>
        </header>

        </>
    )
};