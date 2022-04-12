import React from 'react';
import {useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import News from './News';
import Pokemons from './Pokemons';
import Moves from './Moves';
import Types from './Types';
import Meta from './Meta';
import Games from './Games';
import Movies from './Movies';

export default function Main() {
    const main = useSelector(state => state.main);

    return(
        <Box className="main-content">
            <MainSelected itemMain={main}/>
        </Box>
    )
}

const MainSelected = ({itemMain}) => {
    return(
        <>
            {itemMain === 'News' ? <News/>
            :itemMain === 'Pokemons' ? <Pokemons/>
            :itemMain === 'Moves' ? <Moves/>
            :itemMain === 'Types' ? <Types/>
            :itemMain === 'Meta' ? <Meta/>
            :itemMain === 'Games' ? <Games/>
            :itemMain === 'Movies' ? <Movies/>
            :<></>}
        </>
    )
}