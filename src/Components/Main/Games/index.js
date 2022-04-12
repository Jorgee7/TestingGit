import React from 'react';
import Box from '@mui/material/Box';
import CardGames from './CardGame';

const styleContainer = {display: 'flex',flexWrap: 'wrap'}

export default function Moves() {
    return(
        <Box style={styleContainer}>
            <CardGames/>
            <CardGames/>
            <CardGames/>
            <CardGames/>
            <CardGames/>
            <CardGames/>
            <CardGames/>
        </Box>
    )
}