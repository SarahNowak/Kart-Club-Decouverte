import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import TripInProgress from '../TripInProgress';
import Presentation from '../Presentation';
import CardTrip from '../CardTrip';

const Home = () => (
  <main>
    <Presentation />
    <TripInProgress />
    <section className="lastTrips-content">
      <h2 className="lastTrips-title"> Les 3 dernières sorties</h2>
      <div className="lastTrips-cardsList">
        <CardTrip />
        <CardTrip />
        <CardTrip />
      </div>
    </section>
  </main>
);

Home.propTypes = {

};

export default Home;
