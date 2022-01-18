import React from 'react';

import ErrMessage from 'src/components/ErrMessagesDisplayer/ErrMessage';

import PropTypes from 'prop-types';

import './style.scss';

const ErrMessagesDisplayer = ({
  httpErrorMessage,
  showHttpErrorMessage,
  changeHttpErrorMessage,
}) => (
  <div className="errorMessagesDisplayer">
    <ErrMessage
      message={httpErrorMessage}
      show={showHttpErrorMessage}
      reset={changeHttpErrorMessage}
    />
  </div>
);

ErrMessagesDisplayer.propTypes = {
  httpErrorMessage: PropTypes.string.isRequired,
  showHttpErrorMessage: PropTypes.bool.isRequired,
  changeHttpErrorMessage: PropTypes.func.isRequired,
};

export default ErrMessagesDisplayer;
