import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import BurgerDropdownMenu from 'src/containers/BurgerDropdownMenu';
import BurgerBtn from 'src/containers/BurgerBtn';
import logo from 'src/assets/images/logo.png';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import LoginButton from '../LoginButton';

const AppHeader = ({ burgerIsOpen }) => (
  <header className="header">
    <div className="header-container">
      <BurgerBtn className="burgerBtn" />
      {burgerIsOpen ? <BurgerDropdownMenu className="burgerMenu" /> : ''}
      <Link to="/">
        <img className="header-logo" src={logo} alt="Logo KCD" />
      </Link>
      <LoginButton />
    </div>
    <Nav />
  </header>
);

AppHeader.propTypes = {
  burgerIsOpen: PropTypes.bool,
};

AppHeader.defaultProps = {
  burgerIsOpen: false,
};
export default AppHeader;
