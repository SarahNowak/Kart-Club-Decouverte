import { connect } from 'react-redux';
import FormBecomeMember from 'src/components/FormBecomeMember';
import { changeField, resetForm, changePhotoMember } from 'src/actions/formBecomeMember';

const mapStateToProps = (state) => ({
  name: state.formBecomeMember.name,
  firstName: state.formBecomeMember.firstName,
  adress: state.formBecomeMember.adress,
  postalCode: state.formBecomeMember.postalCode,
  city: state.formBecomeMember.city,
  email: state.formBecomeMember.email,
  number: state.formBecomeMember.number,
  dateOfBirth: state.formBecomeMember.dateOfBirth,
  photoMember: state.formBecomeMember.photoMember,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(name, value));
  },
  resetForm: () => {
    dispatch(resetForm());
  },
  changePhotoMember: (picture) => {
    dispatch(changePhotoMember(picture));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormBecomeMember);
