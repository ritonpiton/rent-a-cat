import React from 'react';
import "./Header.css"
import Logo from '../Logo/Logo';
import {Button} from '@mui/material';
import {theme} from '../../theme';
import {ThemeProvider} from '@mui/material/styles';

function Header({ addCat, isOpen }) {
  return (
    <header className={'header'}>
      <div className={'header__container'}>
        <Logo />
        <p className={"header__title"}>Rent A Cat — сайт бронирования котиков №1 в России</p>
      </div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color={'secondary'} onClick={isOpen}>Добавить котика!</Button>
      </ThemeProvider>
    </header>
  );
}

export default Header;