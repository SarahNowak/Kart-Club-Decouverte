import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// == Composant

const Field = ({
  inputFor,
  value,
  onChange,
  type,
  placeholder,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, inputFor);
  };

  const inputId = `field-${inputFor}`;

  return (
    <div className="field">
      <input
        value={value}
        onChange={handleChange}
        className="field-input"
        id={inputId}
        placeholder={placeholder}
        type={type}
        required
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  inputFor: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
};

// == Export
export default Field;
