import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { createThreeLastTrips, createTripOfMonth } from 'src/selectors';
import trips from 'src/trips';
import TripInProgress from '../TripInProgress';
import Presentation from '../Presentation';
import CardTrip from '../CardTrip';

const Home = () => {
  const threeLastTrips = createThreeLastTrips(trips);
  const tripOfMonth = createTripOfMonth(trips);

  return (
    <main>
      <Presentation />
      {tripOfMonth.map((trip) => (
        <TripInProgress
          key={trip.id}
          {...trip}
          link={trip.id}
        />
      ))}
      <section className="lastTrips-content">
        <h2 className="lastTrips-title"> Les 3 dernières sorties</h2>
        <div className="lastTrips-cardsList">
          {threeLastTrips.map((trip) => (
            <CardTrip
              key={trip.id}
              {...trip}
              link={trip.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

Home.propTypes = {

};

export default Home;
