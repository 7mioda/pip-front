import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Layout from './Layout';
import { getAllFlashSales } from '../actions/flashSaleActions';

const ProductList = ({ flashSales, getAllFlashSales }) => {
  useEffect(() => {
    getAllFlashSales();
    return () => undefined;
  }, [getAllFlashSales]);

  console.log(flashSales);
  return (
    <Layout>
      <p>Flash Sales</p>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  flashSales: state.flashSales.flashSales,
});
export default compose(
  connect(
    mapStateToProps,
    { getAllFlashSales }
  ),
  withRouter
)(ProductList);
