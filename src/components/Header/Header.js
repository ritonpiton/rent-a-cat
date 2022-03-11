import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import { Button } from "@mui/material";
import { theme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';

function Header({ isOpen }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__link" to="/">
          <Logo />
          <p className="header__title">
            Rent A Cat — сайт бронирования котиков №1 в России
          </p>
        </Link>
      </div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" size="small" onClick={isOpen}>
          Добавить котика
        </Button>
      </ThemeProvider>
    </header>
  );
}

export default Header;