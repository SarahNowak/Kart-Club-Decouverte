import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    }
    else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <ul className="nav-list">
        <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active"> Accueil </NavLink>
        <NavLink exact to="/association" className="nav-link" activeClassName="nav-link--active"> L' association </NavLink>
        <NavLink exact to="/les-sorties" className="nav-link" activeClassName="nav-link--active"> Les sorties </NavLink>
        <NavLink exact to="/devenir-membre" className="nav-link" activeClassName="nav-link--active"> Devenir membre </NavLink>
        <NavLink exact to="/nos-partenaires" className="nav-link" activeClassName="nav-link--active"> Nos partenaires </NavLink>
      </ul>
    </nav>
  );
};

Nav.propTypes = {

};

export default Nav;
