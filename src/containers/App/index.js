import { connect } from 'react-redux';
import App from 'src/components/App';
import { autoconnect } from 'src/actions/user';
import { getTripsFromAPI } from 'src/actions/trips';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  tryAutoconnect: () => {
    dispatch(autoconnect());
  },
  getTrips: () => {
    dispatch(getTripsFromAPI());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
