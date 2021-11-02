/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Button } from '@material-ui/core';
import Field from '../Field';

const FormBecomeMember = () => (
  <section className="formBecomeMember">
    <h2 className="formBecomeMember-title">Formulaire d'inscription</h2>
    <form className="formBecomeMember-form">
      <section className="sectionLeft">
        <div className="sectionLeft-input">
          <Field inputFor="lastname" onChange="" placeholder="Nom" value="" type="text" />
          <Field inputFor="firstname" onChange="" placeholder="Prénom" value="" type="text" />
          <Field inputFor="adress" onChange="" placeholder="Adresse" value="" type="text" />
          <Field inputFor="postalCode" onChange="" placeholder="Code postal" value="" type="text" />
          <Field inputFor="city" onChange="" placeholder="Ville" value="" type="text" />
        </div>
      </section>
      <section className="sectionRight">
        <div className="sectionRight-input">
          <Field inputFor="email" onChange="" placeholder="Adresse mail" value="" type="email" />
          <Field inputFor="number" onChange="" placeholder="Téléphone" value="" type="text" />
          <Field inputFor="dateOfBirth" onChange="" placeholder="Date de naissance" value="" type="text" />
          <label htmlFor="avatarPicture" className="newAvatarForm-label" onChange="">
            Photo(carte de membre)
          </label>
          <input
            className="photoForm-input"
            type="file"
            id="avatarPicture"
            name="avatarPicture"
            accept="image/png, image/jpeg"
            onChange=""
          />
        </div>
      </section>
    </form>
    <div className="form-button">
      <Button type="submit" variant="contained" onClick="" color="primary">Envoyer mon inscription</Button>
    </div>
  </section>
);

FormBecomeMember.propTypes = {

};

export default FormBecomeMember;
