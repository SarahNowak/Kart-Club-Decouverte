import { connect } from 'react-redux';
import Registration from 'src/components/Registration';

import { changeFieldRegistration, createUserInDB } from 'src/actions/registration';

const mapStateToProps = (state) => ({
  email: state.registration.email,
  pseudo: state.registration.pseudo,
  password: state.registration.password,
  loading: state.registration.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeFieldRegistration(name, value));
  },
  saveUser: (pseudo, email, password) => {
    dispatch(createUserInDB(pseudo, email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
