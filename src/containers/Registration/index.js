import { connect } from 'react-redux';
import Registration from 'src/components/Registration';

import { changeFieldRegistration } from 'src/actions/registration';

const mapStateToProps = (state) => ({
  email: state.registration.email,
  pseudo: state.registration.pseudo,
  password: state.registration.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeFieldRegistration(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
