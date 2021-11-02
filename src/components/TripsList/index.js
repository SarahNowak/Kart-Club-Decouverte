import React from 'react';
import PropTypes from 'prop-types';

import CardTrip from 'src/components/CardTrip';

import './style.scss';

const TripsList = ({ listOfTrips }) => (
  <main className="tripsList">
    <h1 className="tripsList-title"> Les sorties </h1>
    <section className="tripsList-container">
      {listOfTrips.map((trip) => (
        <CardTrip
          key={trip.id}
          {...trip}
          link={trip.id}
        />
      ))}
    </section>
  </main>
);

TripsList.propTypes = {
  listOfTrips: PropTypes.array.isRequired,
};

export default TripsList;
