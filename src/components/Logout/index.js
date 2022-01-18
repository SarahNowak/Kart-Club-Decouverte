import React from 'react';

import PropTypes from 'prop-types';
import './style.scss';

const Logout = ({ disconnect }) => (
  <div className="logOutBtn" onClick={disconnect} type="button"> Déconnexion </div>
);

Logout.propTypes = {
  disconnect: PropTypes.func.isRequired,
};

export default Logout;
