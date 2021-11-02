import { connect } from 'react-redux';
import { changeField } from 'src/actions/contact';

import Field from 'src/components/Field';

const mapStateToProps = (state) => ({
  lastName: state.contact.lastName,
  firstName: state.contact.firstName,
  email: state.contact.email,
  message: state.contact.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
