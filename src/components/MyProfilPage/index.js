import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MyProfilPage = ({ isLogged, userPseudo }) => (
  <main className="myProfilPage">
    {isLogged && (
      <div className="myProfilPage-salutation">
        <p>{`Bonjour ${userPseudo}`}</p>
      </div>
    )}
  </main>
);

MyProfilPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  userPseudo: PropTypes.string.isRequired,
};

export default MyProfilPage;
