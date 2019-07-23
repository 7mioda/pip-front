import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';
import Menu from './Menu';
import withStyle from './withStyleVerticalMenu';
import { openModal } from '../../actions/uiActions';
import { logout } from '../../actions/authActions';

const VerticalMenuWrapper = ({
  className,
  isDirector,
  isBanker,
  history,
  logout,
}) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={`${className}`}>
      <button
        className={menu ? 'menu__logo' : 'menu__logo inactive'}
        type="button"
        onClick={() => setMenu(!menu)}
      />
      <Menu right classNames={menu ? ['menu--active'] : ['menu--inactive']}>
        {isDirector && (
          <MenuItem
            title="Dashboard"
            className="menu-item"
            onClick={() => history.push('/plantify.it/admin-seller')}
          />
        )}
        {isDirector && (
          <MenuItem
            title="Produits"
            className="menu-item"
            onClick={() => history.push('/plantify.it/admin-seller/products')}
          />
        )}
        {isBanker && (
          <MenuItem
            title="Ventes falsh"
            className="menu-item"
            onClick={() => history.push('/plantify.it/admin-seller/flash-sales')
            }
          />
        )}
        {isBanker && (
          <MenuItem
            title="Deliveries"
            className="menu-item"
            onClick={() => history.push('/plantify.it/admin-seller/deliveries')
            }
          />
        )}
        <MenuItem
          title="Commandes"
          className="menu-item"
          onClick={() => history.push('/plantify.it/admin-seller/orders')
          }
        />
        <MenuItem
          title="Categories"
          className="menu-item"
          onClick={() => history.push('/plantify.it/admin-seller/categories')
          }
        />
        <MenuItem title="Logout" className="menu-item" onClick={logout} />
      </Menu>
    </div>
  );
};


const mapStateToProps = ({ auth: { as: role, isAuthenticated } }) => ({
  isDirector: (isAuthenticated && role === 'director') || true,
  isBanker: (isAuthenticated && role === 'banker') || true,
});

export default compose(
  connect(
    mapStateToProps,
    { openModal, logout }
  ),
  withRouter,
  withStyle
)(VerticalMenuWrapper);
