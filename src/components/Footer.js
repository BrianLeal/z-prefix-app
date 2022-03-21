import React from 'react';
import { styled } from '@mui/material/styles';
import { 
    Box,
    Paper,
    Grid,
    TextField,
    Button
} from '@mui/material';

export default function Footer (){
    return (
        <>
         <header className='app-header'>
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