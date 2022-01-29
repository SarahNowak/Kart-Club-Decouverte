import { connect } from 'react-redux';
import App from 'src/components/App';
import { autoconnect } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  tryAutoconnect: () => {
    dispatch(autoconnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
