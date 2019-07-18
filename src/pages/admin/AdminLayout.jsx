import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/uiActions';
import { login } from '../../actions/authActions';
import VerticalMenuWrapper from '../../components/Menu/VerticalMenuWrapper';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import useTitle from '../../hooks/useTitle';

const AdminLayout = ({
  modalName, openModal, isFetching, children,
}) => {
  useTitle('Admin', isFetching);
  return (
    <div>
      <ProgressBar isFetching={isFetching} />
      <VerticalMenuWrapper />
      <div style={{ maxWidth: '1120px', margin: '10px auto' }}>{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalName: state.ui.modalContent,
  isFetching: state.ui.isFetching,
});

export default connect(
  mapStateToProps,
  { openModal, login }
)(AdminLayout);
