export const REGISTER_USER_TRIP_IN_DB = 'REGISTER_USER_TRIP_IN_DB';
export const registerUserTripInDB = (userId, tripId) => ({
  type: REGISTER_USER_TRIP_IN_DB,
  userId,
  tripId,
});

export const UNREGISTER_USER_TRIP_IN_DB = 'UNREGISTER_USER_TRIP_IN_DB';
export const unRegisterUserTripInDB = (userId, tripId) => ({
  type: UNREGISTER_USER_TRIP_IN_DB,
  userId,
  tripId,
});
