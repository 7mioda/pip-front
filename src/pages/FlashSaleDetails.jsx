import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose } from 'redux';
import { getAllFlashSales } from '../actions/flashSaleActions';
import Layout from './Layout';
import ImageMosaicCarousel from '../components/ImageMosaic/ImageMosaicCarousel';
import FlashSaleProduct from '../components/Cards/FlashSaleProduct';
import 'moment/locale/fr';
import moment from 'moment';

moment.locale('fr');

const withStyle = (component) => styled(component)`
  margin-top: 50px;
  font-family: Roboto, sans-serif;
  color: rgb(72, 72, 72);
  .description {
    margin-bottom: 5px;
    font-style: italic;
    color: #bababa;
}
.price {
    color: #ff3d64;
    letter-spacing: -0.5px;
}
.price span {
    color: #333;
    text-decoration: line-through;
    margin-right: 5px;
}
  .flash-sale__body {
      margin: 20px 80px;
  }
  h1 {
  color: rgb(72, 72, 72);
  }
  
  p {
  color: rgb(72, 72, 72);
  }
`;

const ProductDetails = ({ flashSale, getAllFlashSales, className }) => {
  useEffect(() => {
    getAllFlashSales();
    return () => undefined;
  }, [getAllFlashSales]);
  console.log('sdqsdqsd', flashSale);
  return (
    <Layout>
      <div className={`${className}`}>
        {flashSale && (
          <ImageMosaicCarousel>
            {flashSale.products.map((product) => (
              <img src={product.image} alt="" />
            ))}
          </ImageMosaicCarousel>
        )}
        {flashSale && (
          <div className="flash-sale__body">
            <h1 className="title">{flashSale.name || ' '}</h1>
            <h3 className="description">{moment(flashSale.created_at).fromNow() || 'none'}</h3>
            <h2 className="price">
              {flashSale.price || ' '} TND
            </h2>
            <h3>Description</h3>
            <p>
              {flashSale.description || ' '}
            </p>
            <div>
              { flashSale.products.map((product) => <FlashSaleProduct number="2" product={product} />) }
            </div>
          </div>
        )}
      </div>
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
