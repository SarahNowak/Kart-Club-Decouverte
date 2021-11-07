import { connect } from 'react-redux';
import TripsList from 'src/components/TripsList';

const mapStateToProps = (state) => ({
  listOfTrips: state.trips.listOfTrips,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);
