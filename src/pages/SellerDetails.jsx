import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import Layout from './Layout';
import { getAllSellers } from '../actions/sellerActions';
import Map from '../components/Map/Map';

const withStyle = (component) => styled(component)``;

const SellerDetails = ({ seller, getAllSellers, className }) => {
  useEffect(() => {
    getAllSellers();
    return () => undefined;
  }, [getAllSellers]);
  console.log(seller);
  return (
    <Layout>
      <div className={`${className}`}>Seller details</div>
      <div style={{ width: '100%', height: '800px' }} />
      <div style={{ width: '100%', height: '500px' }}>
        <Map position={{ lat: 36.8514415, lng: 10.2096083 }} zoom="15" />
      </div>
    </Layout>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { sellerId },
    },
  }
) => ({
  seller:
    state.sellers.sellers.find((seller) => seller.id === parseFloat(sellerId))
    || {},
  isAuthenticated: state.auth.isAuthenticated,
});
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getAllSellers }
  ),
  withStyle
)(SellerDetails);
