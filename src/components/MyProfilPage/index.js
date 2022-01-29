/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import HeaderMyProfilPage from '../HeaderMyProfilPage';

const MyProfilPage = () => (
  <div className="myProfilPage">
    <h1 className="myProfilPage-title">Mon profil</h1>
    <HeaderMyProfilPage />
  </div>
);

MyProfilPage.propTypes = {

};

export default MyProfilPage;
