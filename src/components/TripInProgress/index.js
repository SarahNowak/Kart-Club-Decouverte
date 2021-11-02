import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const TripInProgress = ({
  imgCard,
  circuit,
  title,
  adress,
  date,
  link,
}) => (
  <section className="tripInProgress">
    <Link to={`/sortie/${link}`} className="tripInProgress-link">
      <h1 className="tripInProgress-title">La sortie du mois</h1>
      <div className="tripInProgress-content">
        <img className="tripInProgress-photo" src={imgCard} alt="Circuit" />
        <div className="tripInProgress-text">
          <h2 className="tripInProgress-circuit-title">{circuit}</h2>
          <p className="tripInProgress-circuit-presentation">
            {title}
          </p>
          <p className="tripInProgress-circuit-adresse">
            {adress}
          </p>
          <p className="tripInProgress-circuit-date">{date}</p>
          <p />
          <button className="tripInProgress-button" type="button">En savoir plus</button>
        </div>
      </div>
    </Link>
  </section>
);

TripInProgress.propTypes = {
  imgCard: PropTypes.string.isRequired,
  circuit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.number.isRequired,
};

export default TripInProgress;
