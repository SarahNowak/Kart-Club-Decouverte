import { connect } from 'react-redux';

import BurgerBtn from 'src/components/BurgerBtn';

import { toggleBurgerIsOpen } from 'src/actions/settings';

const mapDispatchToProps = (dispatch) => ({
  changeIsOpen: () => {
    dispatch(toggleBurgerIsOpen());
  },
});

export default connect(null, mapDispatchToProps)(BurgerBtn);
