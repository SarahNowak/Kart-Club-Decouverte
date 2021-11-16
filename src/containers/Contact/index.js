import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import { changeField, resetForm } from 'src/actions/contact';

const mapStateToProps = (state) => ({
  lastNameContact: state.contact.lastNameContact,
  firstNameContact: state.contact.firstNameContact,
  emailContact: state.contact.emailContact,
  messageContact: state.contact.messageContact,
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
