import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ConfirmationMessage = ({ showConfirmationMessage, changeShowConfirmationMessage }) => {
  useEffect(() => {
    if (showConfirmationMessage) {
      const timeId = setTimeout(() => {
        changeShowConfirmationMessage(false);
      }, 5000);
      return () => {
        clearTimeout(timeId);
      };
    }
    return null;
  }, [showConfirmationMessage]);

  if (!showConfirmationMessage) {
    return null;
  }

  return (
    <div className="confirmationMessage">
      <p>L'enregistrement a bien été réalisé</p>
    </div>
  );
};

ConfirmationMessage.propTypes = {
  showConfirmationMessage: PropTypes.bool.isRequired,
  changeShowConfirmationMessage: PropTypes.func.isRequired,
};

export default ConfirmationMessage;
