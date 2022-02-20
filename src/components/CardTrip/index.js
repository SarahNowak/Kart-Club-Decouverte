import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

const CardTrip = ({
  link,
  imgCard,
  circuit,
  title,
  adress,
  date,
}) => (
  <div className="cardTrip">
    <Link to={`/sortie/${link}`} className="cardTrip-link">
      <img className="cardTrip-photo" src={`/images/${imgCard}`} alt="Circuit" />
      <div className="cardTrip-text">
        <h2 className="cardTrip-circuit-title">{circuit}</h2>
        <p className="cardTrip-circuit-presentation">
          {title}
        </p>
        <p className="cardTrip-circuit-adresse">
          {adress}
        </p>
        <p className="cardTrip-circuit-date">{date}</p>
        <p />
      </div>
      <button className="cardTrip-button" type="button">En savoir plus</button>
    </Link>
  </div>
);

CardTrip.propTypes = {
  imgCard: PropTypes.string.isRequired,
  circuit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.number.isRequired,
};

export default CardTrip;
