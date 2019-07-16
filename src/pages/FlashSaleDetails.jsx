import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import { getAllFlashSales } from '../actions/flashSaleActions';
import Layout from './Layout';

const withStyle = (component) => styled(component)``;

const ProductDetails = ({ flashSale, getAllFlashSales, className }) => {
  useEffect(() => {
    getAllFlashSales();
    return () => undefined;
  }, [getAllFlashSales]);
  console.log('sdqsdqsd', flashSale);
  return (
    <Layout>
      <div className={`${className}`}>flashSale details</div>
    </Layout>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { flashSaleId },
    },
  }
) => ({
  flashSale: state.flashSales.flashSales.find(
    (flash) => flash.id === parseFloat(flashSaleId)
  ),
  isAuthenticated: state.auth.isAuthenticated,
});
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getAllFlashSales }
  ),
  withStyle
)(ProductDetails);
