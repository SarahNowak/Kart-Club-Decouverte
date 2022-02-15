import { connect } from 'react-redux';
import FormBecomeMember from 'src/components/FormBecomeMember';
import { changeField, resetForm, changePhotoMember } from 'src/actions/formBecomeMember';

const mapStateToProps = (state) => ({
  lastName: state.formBecomeMember.lastNameBecomeMember,
  firstName: state.formBecomeMember.firstNameBecomeMember,
  adress: state.formBecomeMember.adressBecomeMember,
  postalCode: state.formBecomeMember.postalCodeBecomeMember,
  city: state.formBecomeMember.cityBecomeMember,
  email: state.formBecomeMember.emailBecomeMember,
  number: state.formBecomeMember.numberBecomeMember,
  dateOfBirth: state.formBecomeMember.dateOfBirthBecomeMember,
  photoMember: state.formBecomeMember.photoMemberBecomeMember,
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
