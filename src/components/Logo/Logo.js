import React from 'react';
import headerLogo from '../../images/header-logo.svg';
import "./Logo.css"

function Logo() {
  return (
    <img className={'logo'} src={headerLogo} alt="Логотип Mesto" />
  );
}

export default Logo;