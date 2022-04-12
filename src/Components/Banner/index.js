import React from 'react';
import Paper from '@mui/material/Paper';
import Seeker from './Seeker';
import ListOptions from './ListOptions';

export default function Banner() {

    return(
        <Paper className={'banner'}>
            <Seeker/>
            <ListOptions/>
        </Paper>
    )
}