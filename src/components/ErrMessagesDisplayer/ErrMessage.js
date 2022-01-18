import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ErrMessage = ({
  message,
  show,
  reset,
}) => {
  // On componentDidMount set the timer only if show = true
  useEffect(() => {
    if (show) {
      const timeId = setTimeout(() => {
        // After 5 seconds set the showConfMessage value to false
        reset(false, '');
      }, 5000);
      return () => {
        clearTimeout(timeId);
      };
    }
    return null;
  }, [show]);

  // If showConfMessage is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If showConfMessage is true this will be returned
  return (
    <p className="errorMessagesDisplayer-message">{message}</p>
  );
};

ErrMessage.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ErrMessage;
