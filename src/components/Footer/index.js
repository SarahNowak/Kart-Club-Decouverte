import React from 'react';
import PropTypes from 'prop-types';

import EmailIcon from '@material-ui/icons/Email';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import AssignmentIcon from '@material-ui/icons/Assignment';

import './style.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-list">
      <NavLink exact to="/nous-contacter" className="footer-link" activeClassName="footer-link--active">
        <EmailIcon className="footer-link-icon" />
        Nous contacter
      </NavLink>
      <NavLink exact to="/mentions-legales" className="footer-link" activeClassName="footer-link--active">
        <AssignmentIcon className="footer-link-icon" />
        Mentions légales
      </NavLink>
      <NavLink exact to="/qui-sommes-nous" className="footer-link" activeClassName="footer-link--active">
        <NaturePeopleIcon className="footer-link-icon" />
        Qui-sommes nous ?
      </NavLink>
    </div>
    <p className="footer-text">
      Tel un club de randonnée, KCD organise des sorties découvertes "clés en mains"
      à tarif préférentiel
      pour les membres pratiquants afin de découvrir divers circuits de la région
      ou de départements limitrophes.
    </p>
  </footer>
);

Footer.propTypes = {

};

export default Footer;
