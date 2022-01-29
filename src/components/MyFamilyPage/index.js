import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './style.scss';
import { Button } from '@material-ui/core';
import HeaderMyProfilPage from '../HeaderMyProfilPage';

const MyFamilyPage = ({
  changeField,
  lastNameFamily,
  firstNameFamily,
  license,
}) => (
  <main className="myFamilyPage">
    <h1 className="myProfilPage-title">Mon profil</h1>
    <HeaderMyProfilPage />
    <section className="myFamilyPage-container">
      <select className="myFamilyPage-select">
        <option value="">Ma famille</option>
      </select>
      <form className="myFamilyPage-form">
        <h2 className="myFamilyPage-title">Ajouter un membre</h2>
        <div className="form-input">
          <Field inputFor="lastNameContact" placeholder="Nom" type="text" onChange={changeField} value={lastNameFamily} />
          <Field inputFor="firstNameContact" placeholder="Prénom" type="text" onChange={changeField} value={firstNameFamily} />
          <Field inputFor="emailContact" placeholder="Numéro de license" type="email" onChange={changeField} value={license} />
        </div>
        <div className="myFamilyPage-form-button">
          <Button type="submit" variant="contained" value="send" color="primary">Ajouter</Button>
        </div>
      </form>
    </section>
  </main>
);

MyFamilyPage.propTypes = {
  changeField: PropTypes.func.isRequired,
  lastNameFamily: PropTypes.string.isRequired,
  firstNameFamily: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
};

export default MyFamilyPage;
