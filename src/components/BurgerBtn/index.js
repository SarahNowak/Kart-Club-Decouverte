import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import PropTypes from 'prop-types';

const BurgerBtn = ({ className, changeIsOpen }) => {
  const handleClick = (event) => {
    event.preventDefault();
    changeIsOpen();
  };

  return (
    <div className={className} onClick={handleClick}>
      <MenuIcon />
    </div>
  );
};

BurgerBtn.propTypes = {
  className: PropTypes.string.isRequired,
  changeIsOpen: PropTypes.func.isRequired,
};

export default BurgerBtn;
