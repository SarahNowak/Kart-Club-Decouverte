import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Loading from 'src/components/Loading';
import { createThreeLastTrips, createTripOfMonth } from 'src/selectors';
import TripInProgress from '../TripInProgress';
import Presentation from '../Presentation';
import CardTrip from '../CardTrip';

const Home = ({ listOfTrips }) => {
  const threeLastTrips = createThreeLastTrips(listOfTrips);
  const tripOfMonth = createTripOfMonth(listOfTrips);

  if (!listOfTrips) {
    return (
      <main><Loading /></main>
    );
  }

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
  listOfTrips: PropTypes.array.isRequired,

};

export default Home;
