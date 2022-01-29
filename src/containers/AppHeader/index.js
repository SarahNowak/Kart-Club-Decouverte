import { connect } from 'react-redux';

import AppHeader from 'src/components/AppHeader';

const mapStateToProps = (state) => ({
  burgerIsOpen: state.settings.burgerIsOpen,
  isLogged: state.user.logged,
  userPseudo: state.user.pseudo,
});

export default connect(mapStateToProps, null)(AppHeader);
