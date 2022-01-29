import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import HeaderMyProfilPage from '../HeaderMyProfilPage';
import CardTrip from '../CardTrip';

const MyTripsPage = () => (
  <main className="myTripsPage">
    <h1 className="myProfilPage-title">Mon profil</h1>
    <HeaderMyProfilPage />
    <section className="myTripsPage-nextTrips">
      <h2 className="myTripsPage-title">Ma prochaine sortie</h2>
      {/* <CardTrip /> */}
    </section>
    <h2 className="myTripsPage-title">Mes sorties précédentes</h2>
    <section className="myTripsPage-previousTrips">
      {/* <CardTrip />
      <CardTrip />
      <CardTrip /> */}
    </section>
  </main>
);

MyTripsPage.propTypes = {

};

export default MyTripsPage;
