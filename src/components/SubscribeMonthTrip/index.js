import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Button } from '@material-ui/core';

const SubscribeMonthTrip = ({
  user,
  memberFamily,
  userId,
  registerUserTrip,
  tripId,
  unRegisterUserTrip,
  listOfUserTrip,
}) => {
  const handleSubmitSave = (event) => {
    event.preventDefault();
    registerUserTrip(userId, tripId);
  };

  const handleSubmitUnSave = (event) => {
    event.preventDefault();
    unRegisterUserTrip(userId, tripId);
  };

  const userTripId = listOfUserTrip.map((userTrip) => userTrip.id);

  return (
    <main className="subscribeMonthTrip">
      <h2 className="subscribeMonthTrip-title">Inscription à la sortie du mois</h2>
      <div className="subscribeMonthTrip-container">
        <h3 className="subscribeMonthTrip-subtitle">Membres présents à la sortie</h3>
        <div className="subscribeMonthTrip-form">
          <div className="subscribeMonthTrip-input">
            <label htmlFor="user">
              <input hidden type="text" id="user" name={user} value={userId} readOnly />
              {user}
            </label>
            {userTripId.includes(tripId)
              ? (
                <div type="submit" className="subscribeMonthTrip-formSubmitBtn">
                  <Button variant="contained" color="primary" onClick={handleSubmitUnSave}>Me désinscrire</Button>
                </div>
              )
              : (
                <div type="submit" className="subscribeMonthTrip-formSubmitBtn">
                  <Button variant="contained" color="primary" onClick={handleSubmitSave}>M'inscrire</Button>
                </div>
              )}
          </div>

          {/* {memberFamily.map((member) => (
            <div className="subscribeMonthTrip-input" key={member.id}>
              <label htmlFor={member.id}>
                <input hidden type="text" id={member.id} name={member.firstName} value={member.id} readOnly />
                {member.firstName}
              </label>
              <div type="submit" className="subscribeMonthTrip-formSubmitBtn">
                <Button variant="contained" color="primary">M'inscrire</Button>
              </div>
            </div>
          ))} */}

        </div>
      </div>
    </main>
  );
};

SubscribeMonthTrip.propTypes = {
  user: PropTypes.string.isRequired,
  // memberFamily: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  registerUserTrip: PropTypes.func.isRequired,
  unRegisterUserTrip: PropTypes.func.isRequired,
  listOfUserTrip: PropTypes.array.isRequired,

};

export default SubscribeMonthTrip;
