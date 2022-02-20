import { connect } from 'react-redux';
import MyTripsPage from 'src/components/MyTripsPage';
import { findIdTripOfMonth } from '../../selectors';

const mapStateToProps = (state) => ({
  listOfTrips: state.trips.listOfTrips,
  listOfUserTrip: state.user.trips,
  tripIdOfMonth: findIdTripOfMonth(state.trips.listOfTrips),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyTripsPage);
