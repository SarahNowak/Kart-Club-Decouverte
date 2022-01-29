import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BurgerDropdownMenu from 'src/containers/BurgerDropdownMenu';
import BurgerBtn from 'src/containers/BurgerBtn';
import logo from 'src/assets/images/logo.png';
import { Link } from 'react-router-dom';
import LoginButton from 'src/containers/LoginButton';
import Nav from '../Nav';

const AppHeader = ({ burgerIsOpen, isLogged, userPseudo }) => (
  <header className="header">
    <div className="header-container">
      <BurgerBtn className="burgerBtn" />
      {burgerIsOpen ? <BurgerDropdownMenu className="burgerMenu" /> : ''}
      <Link to="/">
        <img className="header-logo" src={logo} alt="Logo KCD" />
      </Link>
      <div className="connect">
        {isLogged && (
        <div className="connect-container">
          <Link to="/mon-profil">
            <AccountCircleIcon fontSize="large" className="connect-buttonProfil" />
          </Link>
          <p className="connect-salutation">{`Bonjour ${userPseudo}`}</p>
        </div>
        )}
        <LoginButton />
      </div>
    </div>
    <Nav />
  </header>
);

AppHeader.propTypes = {
  burgerIsOpen: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
  userPseudo: PropTypes.string.isRequired,
};

AppHeader.defaultProps = {
  burgerIsOpen: false,
};
export default AppHeader;
