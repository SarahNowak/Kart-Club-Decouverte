import { connect } from 'react-redux';

import AppHeader from 'src/components/AppHeader';

const mapStateToProps = (state) => ({
  burgerIsOpen: state.settings.burgerIsOpen,
});

export default connect(mapStateToProps, null)(AppHeader);
