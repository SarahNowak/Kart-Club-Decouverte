import React from 'react';
import PropTypes from 'prop-types';

import CardTrip from 'src/components/CardTrip';
import { createListSearchedTrips } from 'src/selectors/index';

import './style.scss';
import Search from 'src/containers/Search';

const TripsList = ({ listOfTrips, searchedWord }) => {
  let filteredTrips = [];

  if (searchedWord) {
    filteredTrips = createListSearchedTrips(listOfTrips, searchedWord);
  }
  else {
    filteredTrips = listOfTrips;
  }

  return (
    <main className="tripsList">
      <h1 className="tripsList-title"> Les sorties </h1>
      <Search />
      <section className="tripsList-container">
        {filteredTrips.map((trip) => (
          <CardTrip
            key={trip.id}
            {...trip}
            link={trip.id}
          />
        ))}
      </section>
    </main>
  );
};

TripsList.propTypes = {
  listOfTrips: PropTypes.array.isRequired,
  searchedWord: PropTypes.string,
};

TripsList.defaultProps = {
  searchedWord: '',
};

export default TripsList;
