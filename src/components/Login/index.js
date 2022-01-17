import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { Button } from '@material-ui/core';
import Field from 'src/components/Field';
import { Link } from 'react-router-dom';

const Login = ({
  email,
  password,
  changeField,
  logUser,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    logUser(email, password);
  };

  return (
    <section className="login">
      <form className="login-form">
        <div className="login-text">Veuillez vous connecter</div>
        <div className="login-formField">
          <Field inputFor="email" onChange={changeField} placeholder="Adresse Email" value={email} type="email" />
          <Field inputFor="password" onChange={changeField} placeholder="Mot de passe" value={password} type="password" />
        </div>
        <div type="submit" className="login-formSubmitBtn" onClick={handleSubmit}>
          <Button variant="contained" color="primary">Se connecter</Button>
        </div>
      </form>
      <div className="login-joinUs">
        Envie de nous rejoindre ?
        <Link to="/creer-mon-compte" className="login-createAccount"> Créer un compte </Link>
      </div>
    </section>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  logUser: PropTypes.func.isRequired,
};

export default Login;
