import { connect } from 'react-redux';
import Logout from 'src/components/Logout';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  disconnect: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
