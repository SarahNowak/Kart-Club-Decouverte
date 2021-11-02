import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import { changeField, resetForm } from 'src/actions/contact';

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
  resetForm: () => {
    dispatch(resetForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
