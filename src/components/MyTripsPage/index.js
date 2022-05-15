import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { createTripOfMonth, createLastUserTrips } from 'src/selectors';
import HeaderMyProfilPage from '../HeaderMyProfilPage';
import CardTrip from '../CardTrip';

const MyTripsPage = ({ listOfTrips, listOfUserTrip, tripIdOfMonth }) => {
  const tripOfMonth = createTripOfMonth(listOfTrips);
  const userTripId = listOfUserTrip.map((userTrip) => userTrip.id);
  const listOfLastUserTrips = (createLastUserTrips(listOfUserTrip)).reverse();

  return (
    <main className="myTripsPage">
      <h1 className="myProfilPage-title">Mon profil</h1>
      <HeaderMyProfilPage />
      <section className="myTripsPage-nextTrips">
        <h2 className="myTripsPage-title">Ma prochaine sortie</h2>

        { userTripId.includes(tripIdOfMonth)

          ? tripOfMonth.map((trip) => (
            <CardTrip
              key={trip.id}
              {...trip}
              link={trip.id}
            />
          ))
          : ''}

      </section>
      <h2 className="myTripsPage-title">Mes sorties précédentes</h2>
      <section className="myTripsPage-previousTrips">
        {listOfLastUserTrips.map((trip) => (
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

MyTripsPage.propTypes = {
  listOfTrips: PropTypes.array.isRequired,
  listOfUserTrip: PropTypes.array.isRequired,
  tripIdOfMonth: PropTypes.number.isRequired,
};

export default MyTripsPage;
