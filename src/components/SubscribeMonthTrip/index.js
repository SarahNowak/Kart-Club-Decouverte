import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Button } from '@material-ui/core';

const SubscribeMonthTrip = () => (
  <main className="subscribeMonthTrip">
    <h2 className="subscribeMonthTrip-title">Inscription à la sortie du mois</h2>
    <div className="subscribeMonthTrip-container">
      <h3 className="subscribeMonthTrip-subtitle">Membres présents à la sortie</h3>
      <form className="subscribeMonthTrip-form">
        <div className="subscribeMonthTrip-checkbox">
          <label htmlFor="member">
            <input type="checkbox" id="coding" name="member1" value="coding" />
            Membre 1
          </label>
        </div>
        <div className="subscribeMonthTrip-checkbox">
          <label htmlFor="member">
            <input type="checkbox" id="music" name="member2" value="music" />
            Membre 2
          </label>
        </div>
        <div className="subscribeMonthTrip-checkbox">
          <label htmlFor="member">
            <input type="checkbox" id="music" name="member3" value="music" />
            Membre 3
          </label>
        </div>
        <div type="submit" className="subscribeMonthTrip-formSubmitBtn">
          <Button variant="contained" color="primary">Envoyer</Button>
        </div>
      </form>
    </div>

  </main>
);

SubscribeMonthTrip.propTypes = {

};

export default SubscribeMonthTrip;
