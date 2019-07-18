import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { openModal } from '../actions/uiActions';
import { login, subscribe } from '../actions/authActions';
import LoginModal from '../components/Modals/LoginModal';
import SubscriptionModal from '../components/Modals/SubscriptionModal';
import Footer from '../components/Footer/Footer';
import MenuWrapper from '../components/Menu/MenuWrapper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import useTitle from '../hooks/useTitle';
import useSubscribe from '../hooks/useSubscribe';
import { addNotification } from '../actions/notificationActions';
import ProductModal from '../components/Modals/ProductModal';

const Layout = ({
  modalName,
  openModal,
  login,
  subscribe,
  addNotification,
  isFetching,
  children,
}) => {
  useTitle('Acceuil', isFetching);
  useSubscribe('http://plantify.it/flash-sales', addNotification);
  return (
    <div style={{ position: 'relative' }}>
      <ProgressBar isFetching={isFetching} />
      <MenuWrapper />
      <div>{children}</div>
      <Footer />
      <LoginModal modalName={modalName} openModal={openModal} login={login} />
      {modalName === 'email-subscription' && (
        <SubscriptionModal
          modalName={modalName}
          subscribe={subscribe}
          openModal={openModal}
        />
      )}
      <ProductModal modalName={modalName} openModal={openModal} login={login} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalName: state.ui.modalContent,
  isFetching: state.ui.isFetching,
});

export default compose(
  connect(
    mapStateToProps,
    {
      openModal, login, subscribe, addNotification,
    }
  ),
  withRouter
)(Layout);
