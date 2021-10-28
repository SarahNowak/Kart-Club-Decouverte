import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Presentation = () => (
  <section className="presentation">
    <div className="presentation-container">
      <div className="presentation-summary">
        <h1 className="summary-title">
          <span className="summary-title-green">Kart </span>
          <span className="summary-title-white">Club </span>
          <span className="summary-title-red">Découverte </span>
        </h1>
        <p className="summary-text">KCD est une association à but non lucratif créée afin de faire découvrir et rendre accessible au plus grand nombre (petits et grands) la pratique du karting.</p>
      </div>
    </div>
  </section>
);

Presentation.propTypes = {

};

export default Presentation;
