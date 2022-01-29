import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Field from 'src/components/Field';
import { Button } from '@material-ui/core';
import HeaderMyProfilPage from '../HeaderMyProfilPage';

const MyInfoPage = ({
  changeField,
  lastName,
  firstName,
  adress,
  postalCode,
  city,
  number,
  email,
  license,
}) => (
  <main className="myInfoPage">
    <h1 className="myProfilPage-title">Mon profil</h1>
    <HeaderMyProfilPage />
    <form className="myInfoPage-form">
      <section className="sectionLeft">
        <div className="sectionLeft-input">
          <Field inputFor="lastName" onChange={changeField} placeholder="Nom" value={lastName} type="text" />
          <Field inputFor="firstName" onChange={changeField} placeholder="Prénom" value={firstName} type="text" />
          <Field inputFor="adress" onChange={changeField} placeholder="Adresse" value={adress} type="text" />
          <Field inputFor="postalCode" onChange={changeField} placeholder="Code postal" value={postalCode} type="text" />
          <Field inputFor="city" onChange={changeField} placeholder="Ville" value={city} type="text" />
        </div>
      </section>
      <section className="sectionRight">
        <div className="sectionRight-input">
          <Field inputFor="number" onChange={changeField} placeholder="Téléphone" value={number} type="tel" maxlenght="10" />
          <Field inputFor="email" onChange={changeField} placeholder="Adresse mail" value={email} type="email" />
          <Field inputFor="license" onChange={changeField} placeholder="Numéro de license" value={license} type="text" />
        </div>
      </section>
      <div className="myInfoPage-form-button">
        <Button type="submit" variant="contained" value="send" color="primary">Modifier</Button>
      </div>
    </form>
  </main>
);

MyInfoPage.propTypes = {
  changeField: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
};

export default MyInfoPage;
