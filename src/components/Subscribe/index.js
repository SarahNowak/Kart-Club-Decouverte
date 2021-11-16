import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Subscribe = () => (
  <main className="subscribe">
    <div className="subscribe-container">
      <h2 className="subscribe-title">Inscription à la sortie du mois</h2>
      <div className="subscribe-text">
        <p>
          Les inscriptions aux sorties se font soit par mail à :
          <br />
          <span className="subscribe-text-span">contact@kart-club-decouverte.fr</span>
          <br />
          ou par téléphone au :
          <br />
          <span className="subscribe-text-span">06.06.06.06.06</span>
        </p>
        <p>
          Veuillez indiquer le nombre de participants ainsi que les noms, prénoms
          et la catégorie d'âge de chaque participant.
        </p>
      </div>
    </div>
  </main>
);

Subscribe.propTypes = {

};

export default Subscribe;
