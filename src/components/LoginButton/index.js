import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';
import Logout from '../../containers/Logout';

const LoginButton = ({ isLogged }) => (
  <Link to="/connexion">
    <button className="button" type="button">
      {!isLogged ? 'Se connecter' : <Logout /> }
    </button>
  </Link>
);

LoginButton.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default LoginButton;
