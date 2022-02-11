import { connect } from 'react-redux';
import MyFamilyPage from 'src/components/MyFamilyPage';
import { changeFieldMemberFamily, addMemberFamilyInDB } from 'src/actions/memberFamilyRegistration';

const mapStateToProps = (state) => ({
  lastName: state.memberFamilyRegistration.lastName,
  firstName: state.memberFamilyRegistration.firstName,
  license: state.memberFamilyRegistration.license,
  user: state.user.id,
  memberFamily: state.user.memberFamily,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeFieldMemberFamily(name, value));
  },
  addMemberFamily: (newMemberFamily) => {
    dispatch(addMemberFamilyInDB(newMemberFamily));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyFamilyPage);
