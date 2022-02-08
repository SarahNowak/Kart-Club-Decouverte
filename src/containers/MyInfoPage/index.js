import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MyInfoPage from 'src/components/MyInfoPage';
import { changeField, editUserInDB, storeDataBeforeEdit } from 'src/actions/user';

const mapStateToProps = (state) => ({
  userToEdit: state.user.id,
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  adress: state.user.adress,
  postalCode: state.user.postalCode,
  city: state.user.city,
  number: state.user.number,
  email: state.user.email,
  license: state.user.license,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(name, value));
  },
  configureReducer: (userToEdit) => {
    const action = storeDataBeforeEdit(userToEdit);
    dispatch(action);
  },
  editUser: (editedUser) => {
    dispatch(editUserInDB(editedUser));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(MyInfoPage);
// on enrichi le conteneur avec des props liés à l'url
const containerWithRouter = withRouter(container);
// c'est le conteneur enrichi qu'on exporte
export default containerWithRouter;
