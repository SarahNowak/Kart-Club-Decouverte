import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import './style.scss';
import { Button } from '@material-ui/core';

const Registration = ({
  email,
  pseudo,
  password,
  changeField,
  saveUser,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser(pseudo, email, password);
  };

  return (
    <main className="registration">
      <form className="registration-form">
        <div className="registration-text">Créer mon compte</div>
        <div className="registration-form-field">
          <Field inputFor="pseudo" onChange={changeField} placeholder="Pseudo" value={pseudo} type="text" />
          <Field inputFor="email" onChange={changeField} placeholder="Adresse Email" value={email} type="email" />
          <Field inputFor="password" onChange={changeField} placeholder="Mot de passe" value={password} type="password" />
        </div>
        <div className="registration-submitBtn">
          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
            Envoyer
          </Button>
        </div>
      </form>
    </main>
  );
};

Registration.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

export default Registration;
