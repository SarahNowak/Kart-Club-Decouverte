import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Button } from '@material-ui/core';

const SubscribeMonthTrip = ({
  user,
  membersFamily,
  userId,
  registerUserTrip,
  registerMemberFamilyTrip,
  tripId,
  unRegisterUserTrip,
  unRegisterMemberFamilyTrip,
  listOfUserTrip,
}) => {
  const handleSubmitSaveUser = (event) => {
    event.preventDefault();
    registerUserTrip(userId, tripId);
  };

  const handleSubmitUnSaveUser = (event) => {
    event.preventDefault();
    unRegisterUserTrip(userId, tripId);
  };

  const handleSubmitSaveMemberFamily = (event) => {
    event.preventDefault();
    const memberFamilyId = Number(event.target.value);
    registerMemberFamilyTrip(memberFamilyId, tripId);
  };

  const handleSubmitUnSaveMemberFamily = (event) => {
    event.preventDefault();
    const memberFamilyId = Number(event.target.value);
    unRegisterMemberFamilyTrip(memberFamilyId, tripId);
  };

  const userTripId = listOfUserTrip.map((userTrip) => userTrip.id);

  // récupérer les membres d'une famille
  // récupérer les sorties d'un membre
  // récupérer les id des sorties
  // comparer avec l'id de la sortie en cours

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
                <Button variant="contained" color="primary" onClick={handleSubmitUnSaveUser}>Me désinscrire</Button>
              )
              : (
                <Button variant="contained" color="primary" onClick={handleSubmitSaveUser}>M'inscrire</Button>
              )}
          </div>

          {membersFamily.map((member) => (
            <div className="subscribeMonthTrip-input" key={member.id} value={member.id}>
              <label htmlFor={member.firstName} value={member.id}>
                <input hidden type="text" id={member.firstName} name={member.firstName} value={member.id} readOnly />
                {member.firstName}
              </label>
              {userTripId.includes(tripId)
                ? (
                  <button className="button-memberFamily-subscribeTrip" type="submit" variant="contained" color="primary" value={member.id} onClick={handleSubmitUnSaveMemberFamily}>Me désinscrire</button>
                )
                : (
                  <button className="button-memberFamily-subscribeTrip" type="submit" variant="contained" color="primary" value={member.id} onClick={handleSubmitSaveMemberFamily}>M'inscrire</button>
                )}
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

SubscribeMonthTrip.propTypes = {
  user: PropTypes.string.isRequired,
  membersFamily: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
  registerUserTrip: PropTypes.func.isRequired,
  registerMemberFamilyTrip: PropTypes.func.isRequired,
  unRegisterMemberFamilyTrip: PropTypes.func.isRequired,
  unRegisterUserTrip: PropTypes.func.isRequired,
  listOfUserTrip: PropTypes.array.isRequired,
};

export default SubscribeMonthTrip;
