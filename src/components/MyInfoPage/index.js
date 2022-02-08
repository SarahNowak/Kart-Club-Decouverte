import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Field from 'src/components/Field';
import { Button } from '@material-ui/core';
import HeaderMyProfilPage from '../HeaderMyProfilPage';

const MyInfoPage = ({
  userToEdit,
  changeField,
  lastName,
  firstName,
  adress,
  postalCode,
  city,
  number,
  email,
  license,
  editUser,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const editedUser = {
      userToEdit,
      lastName,
      firstName,
      adress,
      postalCode,
      city,
      number,
      email,
      license,
    };
    editUser(editedUser);
  };

  return (
    <main className="myInfoPage">
      <h1 className="myProfilPage-title">Mon profil</h1>
      <HeaderMyProfilPage />
      <form className="myInfoPage-form">
        <section className="sectionLeft">
          <div className="sectionLeft-input">
            <Field inputFor="lastName" onChange={changeField} placeholder="Nom" value={lastName == null ? '' : lastName} type="text" />
            <Field inputFor="firstName" onChange={changeField} placeholder="Prénom" value={firstName == null ? '' : firstName} type="text" />
            <Field inputFor="adress" onChange={changeField} placeholder="Adresse" value={adress == null ? '' : adress} type="text" />
            <Field inputFor="postalCode" onChange={changeField} placeholder="Code postal" value={postalCode == null ? '' : postalCode} type="text" />
            <Field inputFor="city" onChange={changeField} placeholder="Ville" value={city == null ? '' : city} type="text" />
          </div>
        </section>
        <section className="sectionRight">
          <div className="sectionRight-input">
            <Field inputFor="number" onChange={changeField} placeholder="Téléphone" value={number == null ? '' : number} type="tel" maxlenght="10" />
            <Field inputFor="email" onChange={changeField} placeholder="Adresse mail" value={email == null ? '' : email} type="email" />
            <Field inputFor="license" onChange={changeField} placeholder="Numéro de license" value={license == null ? '' : license} type="text" />
          </div>
        </section>
        <div className="myInfoPage-form-button">
          <Button type="submit" variant="contained" value="send" color="primary" onClick={handleSubmit}>Modifier</Button>
        </div>
      </form>
    </main>
  );
};
MyInfoPage.propTypes = {
  userToEdit: PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  adress: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  license: PropTypes.string,
};

MyInfoPage.defaultProps = {
  lastName: ' ',
  firstName: ' ',
  adress: ' ',
  postalCode: ' ',
  city: ' ',
  email: ' ',
  number: ' ',
  license: ' ',
};

export default MyInfoPage;
