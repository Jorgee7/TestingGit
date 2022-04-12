import React from 'react';
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness6 from '@mui/icons-material/Brightness6';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { switchTheme } from '../../Slice/darkMode'

const estiloIcono = {height: '40px', width: '40px', marginRight:'10px'};

export default function Header() {
    const dispatch = useDispatch()

    const changeMode = () => {
        dispatch(switchTheme())
    }

    return(
        <Box className={'main-header'}>
            <IconButton style={estiloIcono}>
                <AccountCircle />
            </IconButton>
            <IconButton style={estiloIcono} onClick={changeMode}>
                <Brightness6 />
            </IconButton>
        </Box>
    )
}