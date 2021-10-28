import { connect } from 'react-redux';

import BurgerDropdownMenu from 'src/components/BurgerDropdownMenu';

import { toggleBurgerIsOpen } from 'src/actions/settings';

const mapDispatchToProps = (dispatch) => ({
  changeIsOpen: () => {
    dispatch(toggleBurgerIsOpen());
  },
});

export default connect(null, mapDispatchToProps)(BurgerDropdownMenu);
