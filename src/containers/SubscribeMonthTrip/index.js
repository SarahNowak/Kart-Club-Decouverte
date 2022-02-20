import { connect } from 'react-redux';
import SubscribeMonthTrip from 'src/components/SubscribeMonthTrip';
import { registerUserTripInDB, unRegisterUserTripInDB } from '../../actions/signUpForTrip';
import { findIdTripOfMonth } from '../../selectors';

const mapStateToProps = (state) => ({
  user: state.user.firstName,
  userId: state.user.id,
  memberFamily: state.user.memberFamily,
  tripId: findIdTripOfMonth(state.trips.listOfTrips),
  listOfUserTrip: state.user.trips,
});

const mapDispatchToProps = (dispatch) => ({
  registerUserTrip: (userId, tripId) => {
    dispatch(registerUserTripInDB(userId, tripId));
  },
  unRegisterUserTrip: (userId, tripId) => {
    dispatch(unRegisterUserTripInDB(userId, tripId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeMonthTrip);
