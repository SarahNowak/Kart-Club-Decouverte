import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// == Composant

const FieldArea = ({
  inputFor,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, inputFor);
  };

  const inputId = `fieldarea-${inputFor}`;

  return (
    <div className="fieldArea">
      <textarea
        value={value}
        onChange={handleChange}
        className="fieldarea-input"
        id={inputId}
        rows="20"
        cols="100"
        placeholder={placeholder}
      />

      <label
        htmlFor={inputId}
        className="fieldarea-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

FieldArea.propTypes = {
  inputFor: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
FieldArea.defaultProps = {
  value: '',
};

// == Export
export default FieldArea;
