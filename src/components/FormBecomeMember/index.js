/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import emailjs from 'emailjs-com';
import { Button } from '@material-ui/core';
import Field from 'src/containers/Field';
import ReCAPTCHA from 'react-google-recaptcha';

const FormBecomeMember = ({
  changeField,
  changePhotoMember,
  name,
  firstName,
  adress,
  postalCode,
  city,
  email,
  number,
  dateOfBirth,
  photoMember,
  resetForm,
}) => {
  const sendEmail = (event) => {
    event.preventDefault();

    const messageContact = {
      name,
      firstName,
      adress,
      postalCode,
      city,
      email,
      number,
      dateOfBirth,
      photoMember,
    };

    emailjs.send('service_1sxcupk', 'template_4zgw6rz', messageContact, 'user_QRJ4xXtrWUF8n8MLFTVtg')
      .then(() => {
        alert('Votre message a été envoyé avec succès');
      }, () => {
        alert("Erreur lors de l'envoi de votre message, merci de nous contacter par téléphone ou mail");
      });

    resetForm();
  };

  const [showCaptcha, setShowCaptcha] = useState(false);
  const handleOnChange = () => {
    setShowCaptcha(true);
  };

  const handleChange = (event) => {
    changePhotoMember(event.target.files[0]);
  };
  return (
    <section className="formBecomeMember">
      <h2 className="formBecomeMember-title">Formulaire d'inscription</h2>
      <form className="formBecomeMember-form" onSubmit={sendEmail}>
        <section className="sectionLeft">
          <div className="sectionLeft-input">
            <Field required inputFor="name" onChange={changeField} placeholder="Nom" value={name} type="text" />
            <Field required inputFor="firstName" onChange={changeField} placeholder="Prénom" value={firstName} type="text" />
            <Field required inputFor="adress" onChange={changeField} placeholder="Adresse" value={adress} type="text" />
            <Field required inputFor="postalCode" onChange={changeField} placeholder="Code postal" value={postalCode} type="text" />
            <Field required inputFor="city" onChange={changeField} placeholder="Ville" value={city} type="text" />
          </div>
        </section>
        <section className="sectionRight">
          <div className="sectionRight-input">
            <Field required inputFor="email" onChange={changeField} placeholder="Adresse mail" value={email} type="email" />
            <Field required inputFor="number" onChange={changeField} placeholder="Téléphone" value={number} type="tel" maxlenght="10" />
            <label>Veuillez saisir votre date de naissance</label>
            <Field required inputFor="dateOfBirth" onChange={changeField} placeholder="Date de naissance" value={dateOfBirth} type="date" />
            <label htmlFor="avatarPicture" className="newAvatarForm-label">
              Photo(carte de membre)
            </label>
            <input
              className="photoForm-input"
              type="file"
              id="avatarPicture"
              name="avatarPicture"
              accept="image/png, image/jpeg"
              onChange={handleChange}
            />
          </div>
        </section>
        <ReCAPTCHA
          // sitekey="6LfRywIeAAAAALY2Pyceg_H9TbTwKo3EiMf-AuaZ"
          sitekey="6LeGUgAdAAAAADec8UUJZ5EjskTj38pGNv_zX8TI"
          onChange={handleOnChange}
          theme="dark"
          className="recaptcha"
        />
        <div className="form-button">
          {showCaptcha
            ? <Button type="submit" variant="contained" value="send" color="primary">Envoyer</Button>
            : ''}
        </div>
      </form>
      <div className="formBecomeMember-privateDatas">
        <p>
          En remplissant ce formulaire, vous certifiez sur l'honneur avoir pris connaissance et
          acceptez sans réserve le règlement intérieur de l'association
          Toutes les informations de ce formulaire sont obligatoires afin de valider votre adhésion.
          Vos données resterons strictement confidentielles et à l’usage unique de
          l’association KCD.
        </p>
      </div>
    </section>
  );
};

FormBecomeMember.propTypes = {
  resetForm: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  changePhotoMember: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  // photoMember: PropTypes.string.isRequired,
};

export default FormBecomeMember;
