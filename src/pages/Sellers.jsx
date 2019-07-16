import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import { getAllSellers } from '../actions/sellerActions';

const Sellers = ({ sellers, getAllSellers }) => {
  useEffect(() => {
    getAllSellers();
    return () => undefined;
  }, [getAllSellers]);

  console.log(sellers);
  return (
    <Layout>
      <p>Sellers</p>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  sellers: state.sellers.sellers,
});
export default compose(
  connect(
    mapStateToProps,
    { getAllSellers }
  ),
  withRouter
)(Sellers);
