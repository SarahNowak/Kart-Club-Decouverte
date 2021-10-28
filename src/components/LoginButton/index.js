import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const LoginButton = () => (
  <Link to="/connexion">
    <button className="button" type="button">Se connecter</button>
  </Link>
);

LoginButton.propTypes = {

};

export default LoginButton;
