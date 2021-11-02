import { connect } from 'react-redux';
import TripsList from 'src/components/TripsList';

const mapStateToProps = (state) => ({
  listOfTrips: state.trips.list,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);
