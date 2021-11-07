export const createThreeLastTrips = (allTrips) => {
  const threeLastTrips = allTrips.slice(1, 4);
  return threeLastTrips;
};

export const createTripOfMonth = (allTrips) => {
  const tripOfMonth = allTrips.slice(0, 1);
  return tripOfMonth;
};

export function findTrip(trips, searchedId) {
  return trips.find((testedTrip) => testedTrip.id == searchedId);
}
