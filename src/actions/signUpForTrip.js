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

export const REGISTER_MEMBERFAMILY_TRIP_IN_DB = 'REGISTER_MEMBERFAMILY_TRIP_IN_DB';
export const registerMemberFamilyTripInDB = (memberFamilyId, tripId) => ({
  type: REGISTER_MEMBERFAMILY_TRIP_IN_DB,
  memberFamilyId,
  tripId,
});

export const UNREGISTER_MEMBERFAMILY_TRIP_IN_DB = 'UNREGISTER_MEMBERFAMILY_TRIP_IN_DB';
export const unRegisterMemberFamilyTripInDB = (memberFamilyId, tripId) => ({
  type: UNREGISTER_MEMBERFAMILY_TRIP_IN_DB,
  memberFamilyId,
  tripId,
});
