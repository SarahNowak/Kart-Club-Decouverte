import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Error = () => (
  <main className="error">
    <p className="error-text">
      Vous vous êtes perdus ...
      <Link className="error-link" to="/"> Retour à l'accueil</Link>
    </p>
  </main>

);

Error.propTypes = {

};

export default Error;
