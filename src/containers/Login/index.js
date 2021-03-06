import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeFieldLogin, connectUser } from 'src/actions/login';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeFieldLogin(name, value));
  },
  logUser: (email, password) => {
    dispatch(connectUser(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
