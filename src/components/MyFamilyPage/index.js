import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './style.scss';
import { Button } from '@material-ui/core';
import HeaderMyProfilPage from '../HeaderMyProfilPage';

const MyFamilyPage = ({
  changeField,
  lastName,
  firstName,
  license,
  addMemberFamily,
  user,
  memberFamily,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMemberFamily = {
      lastName,
      firstName,
      license,
      user,
    };
    addMemberFamily(newMemberFamily);
  };
  return (
    <main className="myFamilyPage">
      <h1 className="myProfilPage-title">Mon profil</h1>
      <HeaderMyProfilPage />
      <section className="myFamilyPage-container">
        <select className="myFamilyPage-select">
          <option value="value">Ma famille</option>
          {memberFamily.map((member) => (
            <option value="value" key={member.id}>{member.lastName} {member.firstName}</option>
          ))}
        </select>
        <form className="myFamilyPage-form">
          <h2 className="myFamilyPage-title">Ajouter un membre</h2>
          <div className="form-input">
            <Field inputFor="lastName" placeholder="Nom" type="text" onChange={changeField} value={lastName} />
            <Field inputFor="firstName" placeholder="Prénom" type="text" onChange={changeField} value={firstName} />
            <Field inputFor="license" placeholder="Numéro de license" type="email" onChange={changeField} value={license} />
          </div>
          <div className="myFamilyPage-form-button">
            <Button type="submit" variant="contained" value="send" color="primary" onClick={handleSubmit}>Ajouter</Button>
          </div>
        </form>
      </section>
    </main>
  );
};
MyFamilyPage.propTypes = {
  changeField: PropTypes.func.isRequired,
  addMemberFamily: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
  memberFamily: PropTypes.array.isRequired,
};

export default MyFamilyPage;
