import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';
import Menu from './Menu';
import withStyle from './withStyleWrapper';
import { openModal } from '../../actions/uiActions';
import { logout } from '../../actions/authActions';

const MenuWrapper = ({
  className,
  isAuthenticated,
  openModal,
  logout,
  history,
}) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={`${className}`}>
      <button
        className={menu ? 'menu__logo' : 'menu__logo inactive'}
        type="button"
        onClick={() => history.push('/plantify.it')}
      >
        {' '}
        Plantify{' '}
      </button>
      <Menu right classNames={menu ? ['menu--active'] : ['menu--inactive']}>
        <MenuItem
          title="Nos Vendeurs"
          onClick={() => history.push('/plantify.it/sellers')}
        />
        <MenuItem
          title="Produits"
          onClick={() => history.push('/plantify.it/products')}
        />
        <MenuItem
          title="Blog"
          onClick={() => history.push('/plantify.it/blog')}
        />
        <MenuItem
          title="Aide"
          onClick={() => history.push('/plantify.it/help')}
        />
        {!isAuthenticated && (
          <MenuItem
            title="Inscription"
            onClick={() => openModal('email-subscription')}
          />
        )}
        {!isAuthenticated && (
          <MenuItem title="Connexion" onClick={() => openModal('login')} />
        )}
        {isAuthenticated && (
          <MenuItem
            title="Mon espace"
            content={(
              <ul>
                <li
                  onClick={() => history.push('/team-will-bank/my-space/credits-proposals')
                  }
                >
                  Demandes credits
                </li>
                <li>test55</li>
                <li>test55</li>
              </ul>
            )}
          />
        )}
        {isAuthenticated && <MenuItem title="Logout" onClick={logout} />}
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default compose(
  connect(
    mapStateToProps,
    { openModal, logout }
  ),
  withRouter,
  withStyle
)(MenuWrapper);
