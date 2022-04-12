import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { themeDark, themeLight } from './theme/theme';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Main from './Components/Main';
import './estilos.css';

export default function Home() {
  const darkMode = useSelector(state => state.darkMode);

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <Box className={`root-style-${darkMode ? 'darkmode' : 'lightmode'}`}>
        <Banner/>
        <Box className={'main'}>
          <Header/>
          <Main/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}