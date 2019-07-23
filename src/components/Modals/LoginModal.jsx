import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withStyleLogin from './withStyleLogin';
import PopUp from '../PopUp/PopUp';
import {login, resetPassword} from '../../actions/authActions';

const LoginModal = ({
  className,
  modalName,
  openModal,
  resetPassword,
  login,
  errors,
  history,
}) => {
  const [passwordState, changePasswordState] = useState(true);
  return (
    <PopUp visible={modalName === 'login'} close={() => openModal('none')}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          login({ data: { email: username, password } });
        }}
      >
        {(props) => {
          const { values, handleChange, handleSubmit } = props;
          return (
            <div className={`${className}`}>
              <span className="close-icon" onClick={() => openModal('none')} />
              <button className="btn google" type="submit">
                {' '}
                Connexion avec Google
              </button>
              <span className="separator">ou</span>
              <Form onSubmit={handleSubmit}>
                <div className="text-box">
                  <input
                    type="text"
                    placeholder="Adresse e-mail"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    className="text-input"
                  />
                  <span className="icon-box email" />
                </div>
                <div className="text-box">
                  <input
                    type={`${passwordState ? 'password' : 'text'}`}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                    className="text-input"
                  />
                  <span className="icon-box password" />
                </div>
                <div className="login-params">
                  <span className="left">
                    <input type="checkbox" />
                    Se souvenir de moi
                  </span>
                  <span
                    className="right"
                    onClick={() => changePasswordState(!passwordState)}
                  >
                    {passwordState ? 'Afficher' : 'Masquer'}
                    le mot de passe
                  </span>
                </div>
                <button className="btn pink" type="submit">
                  {' '}
                  Connexion
                </button>
                {errors && <p>{errors[0]}</p>}
              </Form>
              <div className="forgot-password">
                <p onClick={() => resetPassword(values.username)}>Mot de passe oublié ?</p>
              </div>
              <div className="subscription">
                Vous n'avez pas de compte ?
                <span
                  onClick={(event) => {
                    event.stopPropagation();
                    openModal('email-subscription');
                  }}
                >
                  Inscription
                </span>
              </div>
            </div>
          );
        }}
      </Formik>
    </PopUp>
  );
};

const mapStateToProps = (state) => ({
  errors: state.auth.errors,
});

export default compose(
  connect(
    mapStateToProps,
    { login, resetPassword }
  ),
  withRouter,
  withStyleLogin
)(LoginModal);
