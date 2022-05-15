import { connect } from 'react-redux';
import SubscribeMonthTrip from 'src/components/SubscribeMonthTrip';
import {
  registerMemberFamilyTripInDB,
  registerUserTripInDB,
  unRegisterMemberFamilyTripInDB,
  unRegisterUserTripInDB,

} from '../../actions/signUpForTrip';
import { findIdTripOfMonth } from '../../selectors';

const mapStateToProps = (state) => ({
  user: state.user.firstName,
  userId: state.user.id,
  membersFamily: state.user.memberFamily,
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
  registerMemberFamilyTrip: (memberFamilyId, tripId) => {
    dispatch(registerMemberFamilyTripInDB(memberFamilyId, tripId));
  },
  unRegisterMemberFamilyTrip: (memberFamilyId, tripId) => {
    dispatch(unRegisterMemberFamilyTripInDB(memberFamilyId, tripId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeMonthTrip);
