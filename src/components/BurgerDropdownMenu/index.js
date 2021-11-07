import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './style.scss';

const BurgerDropdownMenu = ({ className, changeIsOpen }) => {
  const handleClose = () => {
    changeIsOpen();
  };

  return (
    <div className={className}>
      <button
        className="modal-button"
        aria-label="fermer"
        type="button"
        onClick={handleClose}
      >✘
      </button>
      <Link to="/" className={`${className}-items`} onClick={handleClose}>Accueil</Link>
      <Link to="/association" className={`${className}-items`} onClick={handleClose}>L'association</Link>
      <Link to="/les-sorties" className={`${className}-items`} onClick={handleClose}>Les sorties</Link>
      <Link to="/devenir-membre" className={`${className}-items`} onClick={handleClose}>Devenir membre</Link>
      <Link to="/nos-partenaires" className={`${className}-items`} onClick={handleClose}>Nos partenaires</Link>

    </div>
  );
};

BurgerDropdownMenu.propTypes = {
  className: PropTypes.string.isRequired,
  changeIsOpen: PropTypes.func.isRequired,
};

export default BurgerDropdownMenu;
