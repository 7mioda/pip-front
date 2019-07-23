import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Layout from './Layout';
import { getAllFlashSales } from '../actions/flashSaleActions';
import FlashSaleCard from '../components/Cards/FlashSaleCard';

const ProductList = ({ flashSales, getAllFlashSales }) => {
  useEffect(() => {
    getAllFlashSales();
    return () => undefined;
  }, [getAllFlashSales]);
  const flashSalesView = flashSales.map((flashSale) => <FlashSaleCard flashSale={flashSale} />);
  return (
    <Layout>
      <div style={{ margin: '80px 50px' }}>
        {flashSalesView}
      </div>
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
