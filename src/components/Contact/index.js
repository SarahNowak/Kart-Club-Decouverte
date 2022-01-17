import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './style.scss';
import emailjs from 'emailjs-com';
import Field from 'src/containers/Field';
import ReCAPTCHA from 'react-google-recaptcha';
import FieldArea from '../FieldArea';

const Contact = ({
  changeField,
  lastNameContact,
  firstNameContact,
  emailContact,
  messageContact,
  resetForm,
  verifiedRecaptcha,
}) => {
  const sendEmail = (event) => {
    event.preventDefault();

    const messageContactUs = {
      lastNameContact,
      firstNameContact,
      emailContact,
      messageContact,
    };

    emailjs.send('service_1sxcupk', 'template_yzgi7xv', messageContactUs, 'user_QRJ4xXtrWUF8n8MLFTVtg')
      .then(() => {
        alert('Votre message a été envoyé avec succès');
      }, () => {
        alert("Erreur lors de l'envoi de votre message, merci de nous contacter par téléphone ou mail");
      });

    resetForm();
  };

  const [showCaptcha, setShowCaptcha] = useState(false);
  const handleOnChange = (value) => {
    verifiedRecaptcha(value);
    setShowCaptcha(true);
  };

  return (
    <main className="contact">
      <h1 className="contact-title">Contactez nous !</h1>
      <p className="contact-text">
        Pour toutes demandes d'informations ou partenariat.
        <br />
        Vous avez des idées d’actions pour financer les projets de l’association
        ou pour trouver des partenaires ?
        <br />
        Des suggestions à propos des prochaines
        sorties membres ?
        <br />
        Nous étudierons toutes les idées
        et nous vous ferons un retour dès que possible.
        <br />
        contact@kart-club-decouverte.fr
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <section className="section-form">
          <div className="form-input">
            <Field inputFor="lastNameContact" placeholder="Nom" type="text" onChange={changeField} value={lastNameContact} />
            <Field inputFor="firstNameContact" placeholder="Prénom" type="text" onChange={changeField} value={firstNameContact} />
            <Field inputFor="emailContact" placeholder="Adresse mail" type="email" onChange={changeField} value={emailContact} />
          </div>
          <FieldArea inputFor="messageContact" placeholder="Votre message" onChange={changeField} value={messageContact} />
        </section>
        <ReCAPTCHA
          sitekey="6LeGUgAdAAAAADec8UUJZ5EjskTj38pGNv_zX8TI"
          // sitekey="6LfRywIeAAAAALY2Pyceg_H9TbTwKo3EiMf-AuaZ"
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
    </main>
  );
};

Contact.propTypes = {
  resetForm: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  lastNameContact: PropTypes.string.isRequired,
  firstNameContact: PropTypes.string.isRequired,
  emailContact: PropTypes.string.isRequired,
  messageContact: PropTypes.string.isRequired,
  verifiedRecaptcha: PropTypes.func.isRequired,
};

export default Contact;
