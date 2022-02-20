export const createThreeLastTrips = (allTrips) => {
  const threeLastTrips = allTrips.slice(0, 3);
  return threeLastTrips;
};

export const createTripOfMonth = (allTrips) => {
  const tripOfMonth = allTrips.slice(0, 1);
  return tripOfMonth;
};

export const findIdTripOfMonth = (allTrips) => {
  const tripOfMonth = allTrips.slice(0, 1);
  const idTripOfMonth = tripOfMonth[0].id;
  return idTripOfMonth;
};

export const createLastUserTrips = (allTrips) => {
  const listOfLastUserTrips = allTrips.slice(0, -1);
  return listOfLastUserTrips;
};

export function findTrip(trips, searchedId) {
  return trips.find((testedTrip) => testedTrip.id == searchedId);
}

export const createListSearchedTrips = (allTrips, searchedWord) => {
  const upperSearched = searchedWord.toUpperCase();

  function doesItContained(trip) {
    const upperTrip = trip.circuit.toUpperCase();
    return upperTrip.includes(upperSearched);
  }

  const searchedTrips = allTrips.filter(doesItContained);

  return searchedTrips;
};
