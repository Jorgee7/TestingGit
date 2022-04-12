import React from 'react';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import { switchMain } from '../../../Slice/mainSelected';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    Newspaper as IconNews,
    CatchingPokemon as IconPokemon,
    BorderAll as IconTypes,
    MergeType as IconMoves,
    VpnKey as IconMeta,
    VideogameAsset as IconGames,
    LiveTv as IconMovies
} from '@mui/icons-material';

const itemListStyle= {padding:'8px 10px'};

const arrayOptions = [
    {tittle:'News',icon:<IconNews/>},
    {tittle:'Pokemons',icon:<IconPokemon/>},
    {tittle:'Types',icon:<IconTypes/>},
    {tittle:'Moves',icon:<IconMoves/>},
    {tittle:'Meta',icon:<IconMeta/>},
    {tittle:'Games',icon:<IconGames/>},
    {tittle:'Movies',icon:<IconMovies/>}
];

export default function ListOptions() {
    const dispatch = useDispatch()

    const changeMain = (option) => {dispatch(switchMain(option))}

    return(
        <List>
            {arrayOptions.map(option => <ListItemButton style={itemListStyle} key={option.tittle} onClick={() => changeMain(option.tittle)}>
                <ListItemIcon>
                    {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.tittle} />
            </ListItemButton>
            )}
        </List>
    )
}