import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';
import photoCircuit from 'src/assets/images/circuit-jovikart.jpg';

const TripInProgress = () => (
  <section className="tripInProgress">
    <Link to="/sortie-du-mois" className="tripInProgress-link">
      <h1 className="tripInProgress-title">La sortie du mois</h1>
      <div className="tripInProgress-content">
        <img className="tripInProgress-photo" src={photoCircuit} alt="Circuit" />
        <div className="tripInProgress-text">
          <h2 className="tripInProgress-circuit-title">Circuit JOVIKART</h2>
          <p className="tripInProgress-circuit-presentation">
            1ère sortie nocturne KCD,
            sur le plus grand circuit de la région nantaise !
            Piste PRIVATISEE pour KCD
          </p>
          <p className="tripInProgress-circuit-adresse">
            Adresse : Z.A. La Forêt – 44140 Le Bignon
          </p>
          <p className="tripInProgress-circuit-date">RDV à 19h le vendredi 22 octobre 2021</p>
          <p />
          <button className="tripInProgress-button" type="button">En savoir plus</button>
        </div>
      </div>
    </Link>
  </section>
);

TripInProgress.propTypes = {

};

export default TripInProgress;
