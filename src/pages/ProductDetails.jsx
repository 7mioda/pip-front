import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import { getAllProducts } from '../actions/productActions';
import Layout from './Layout';

const withStyle = (component) => styled(component)``;

const ProductDetails = ({ product, getAllProducts, className }) => {
  useEffect(() => {
    getAllProducts();
    return () => undefined;
  }, [getAllProducts]);
  console.log(product);
  return (
    <Layout>
      <div className={`${className}`}>product details</div>
    </Layout>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { productId },
    },
  }
) => ({
  product:
    state.products.products.find(
      (product) => product.id === parseFloat(productId)
    ) || {},
  isAuthenticated: state.auth.isAuthenticated,
});
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getAllProducts }
  ),
  withStyle
)(ProductDetails);
