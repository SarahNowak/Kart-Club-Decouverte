import { connect } from 'react-redux';
import MyProfilPage from 'src/components/MyProfilPage';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  userPseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfilPage);
