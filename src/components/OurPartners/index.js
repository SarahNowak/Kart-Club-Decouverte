import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import jovikart from 'src/assets/images/jovikart.png';
import kiosque from 'src/assets/images/kiosque-pizzas.png';

import './style.scss';

const OurPartners = () => (
  <main className="ourPartners">
    <h1 className="ourPartners-title"> Nos partenaires </h1>
    <div className="ourPartners-presentation">
      <div className="ourPartners-presentation-text">
        <p>
          Les partenariats d’entreprises sont importants pour l’association car ils permettent
          de percevoir des dotations financières ou matérielles pour la réalisation de nos objectifs
          et le développement de nos projets.
        </p>

        <p>
          Différents partenariats vont être créés (parrainage ou mécénat) selon les projets
          découverte à mettre en place et les besoins de l’association dans son fonctionnement
          (apports financiers ou en nature).
        </p>

        <p>
          EXEMPLE : l’aide au financement pour l’organisation de journées découvertes solidaires
          comme la journée « Kart Family » destinée aux familles nombreuse, ou à faibles revenus,
          et ne pouvant accéder à la pratique du kart, tient une place importante dans l’esprit KCD.
        </p>

        <h2 className="presentation-avantage-title">LES AVANTAGES DU PARRAINAGE POUR NOS PARTENAIRES :</h2>

        <h3 className="presentation-avantage-details">Une visibilité publicitaire non négligeable :</h3>
        <p className="presentation-avantage">
          - Articles de presse
          <br />
          - Publicité sur des équipements
          <br />
          - Visuels et vidéos sur site internet, page Facebook, Instagram et Twitter.
          <br />
          - Invitation d’une personne représentante de l’entreprise sur la ou
          les journées mises en place
          <br />
          - Mise en avant sur les actions
          <br />
        </p>
        <h3 className="presentation-avantage-details">Une nouvelle audience pour des clients potentiels</h3>
      </div>
    </div>
    <div className="ourPartners-container">
      <div className="ourPartners-content">
        <h2 className="partner-title"> Jovikart </h2>
        <img className="partner-logo" src={jovikart} alt="Logo Jovikart" />
        <p className="partner-adress"> Circuit Chantemerle LE BIGNON </p>
      </div>
      <div className="ourPartners-content">
        <h2 className="partner-title"> Le kiosque à pizzas </h2>
        <img className="partner-logo" src={kiosque} alt="Logo Kiosque à pizzas" />
        <p className="partner-adress"> AIGREFEUILLE SUR MAINE </p>
      </div>
    </div>
    <div className="contact-container">
      <p className="contact-text"> Devenir partenaire de KCD ? </p>
      <Link to="/nous-contacter" className="contact-link"> Contactez nous !</Link>
    </div>
  </main>
);

OurPartners.propTypes = {

};

export default OurPartners;
