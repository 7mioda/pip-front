import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './Layout';
import { getAllProducts } from '../actions/productActions';
import { getAllCategories } from '../actions/categoryActions';
import ProductCard from '../components/Cards/ProductCard';

const withStyle = (component) => styled(component)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .page__filter {
    width: 30%;
    max-width: 300px;
    background: pink;
  }
  .page__products {
    width: 70%;
    margin-left: 2%;
  }
`;

const ProductList = ({
  products,
  categories,
  getAllProducts,
  getAllCategories,
  history,
  className,
}) => {
  useEffect(() => {
    getAllProducts();
    getAllCategories();
    return () => undefined;
  }, [getAllProducts, getAllCategories]);

  console.log(products);
  const productsView = products.map((product) => (
    <ProductCard
      product={product}
      onClick={() => history.push(`/plantify.it/products/${product.id}`)}
    />
  ));
  console.log(categories);
  return (
    <Layout>
      <div className={`${className}`}>
        <div className="page__filter" />
        <div className="page__products">{productsView}</div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  categories: state.categories.categories,
});
export default compose(
  connect(
    mapStateToProps,
    { getAllProducts, getAllCategories }
  ),
  withRouter,
  withStyle
)(ProductList);
