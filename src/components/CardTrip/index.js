import React from 'react';

import './style.scss';
import photoCircuit from 'src/assets/images/circuit-plesse.jpg';
import { Link } from 'react-router-dom';

const CardTrip = () => (
  <div className="cardTrip">
    <Link to="/sortie/circuit-solokart" className="cardTrip-link">
      <img className="cardTrip-photo" src={photoCircuit} alt="Circuit" />
      <div className="cardTrip-text">
        <h2 className="cardTrip-circuit-title">Circuit SOLOKART</h2>
        <p className="cardTrip-circuit-presentation">
          Le plus grand circuit d’Europe !
        </p>
        <p className="cardTrip-circuit-adresse">
          Adresse : Lieu-dit « La Piardière », 44630 Plessé
        </p>
        <p className="cardTrip-circuit-date">RDV à 9h30 le dimanche 4 Juillet 2021</p>
        <p />
        <button className="cardTrip-button" type="button">En savoir plus</button>
      </div>
    </Link>
  </div>
);

CardTrip.propTypes = {

};

export default CardTrip;
