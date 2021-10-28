import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './style.scss';
import Field from '../Field';
import FieldArea from '../FieldArea';

const Contact = () => (
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
    </p>
    <form className="contact-form">
      <section className="section-form">
        <div className="form-input">
          <Field inputFor="lastname" onChange="" placeholder="Nom" value="" type="text" />
          <Field inputFor="firstname" onChange="" placeholder="Prénom" value="" type="text" />
          <Field inputFor="email" onChange="" placeholder="Adresse mail" value="" type="email" />
        </div>
        <div className="form-select">
          <select id="select" onChange="" value="">
            <option value="">Sélectionner l'objet de votre message</option>
            <option value="1">Renseignements</option>
            <option value="2">Partenariats</option>
            <option value="3">Autres</option>
          </select>
        </div>
        <FieldArea inputFor="description" onChange="" placeholder="Votre message" value="" />
      </section>
      <div className="form-button">
        <Button type="submit" variant="contained" onClick="" color="primary">Envoyer</Button>
      </div>
    </form>
  </main>
);

Contact.propTypes = {

};

export default Contact;
