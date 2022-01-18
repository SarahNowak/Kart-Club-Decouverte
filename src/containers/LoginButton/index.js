import { connect } from 'react-redux';
import LoginButton from 'src/components/LoginButton';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
