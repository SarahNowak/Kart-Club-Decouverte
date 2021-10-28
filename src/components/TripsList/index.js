import React from 'react';
import PropTypes from 'prop-types';

import CardTrip from 'src/components/CardTrip';

import './style.scss';

const TripsList = () => (
  <main className="tripsList">
    <h1 className="tripsList-title"> Les sorties </h1>
    <section className="tripsList-container">
      <CardTrip />
      <CardTrip />
      <CardTrip />
      <CardTrip />
      <CardTrip />
      <CardTrip />
      <CardTrip />
      <CardTrip />
      <CardTrip />
    </section>
  </main>
);

TripsList.propTypes = {

};

export default TripsList;
