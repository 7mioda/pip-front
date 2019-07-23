import React, { useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './Layout';
import { getAllProducts } from '../actions/productActions';
import { getAllCategories } from '../actions/categoryActions';
import ProductCard from '../components/Cards/ClientCard';
import { addProduct } from '../actions/cartActions';

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
  }
  .page__products {
    width: 70%;
    margin-left: 2%;
  }
  .filter__button {
    width: 100%;
    border: none;
    height: 40px;
    padding: 0 1em;
    outline: none;
    border-radius: 4px;
    font-family: inherit, sans-serif;
    text-transform: capitalize;
    font-size: 12px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;

const ProductList = ({
  products,
  categories,
  getAllProducts,
  getAllCategories,
  addProduct,
  isAuthenticated,
  history,
  className,
}) => {
  useEffect(() => {
    getAllProducts();
    getAllCategories();
    return () => undefined;
  }, [getAllProducts, getAllCategories]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    setSelectedCategories(categories.map(({ id }) => id));
    return () => undefined;
  }, [categories]);
  const filteredProducts = products.filter((product) => selectedCategories.includes(product.category.id));
  const productsView = filteredProducts.map((product) => (
    <ProductCard
      addToCartProduct={addProduct}
      isAuthenticated={isAuthenticated}
      number="4"
      product={product}
      onClick={() => history.push(`/plantify.it/products/${product.id}`)}
    />
  ));
  const categoriesView = categories.map((category) => (
    <button
      className="filter__button"
      type="button"
      onClick={() => setSelectedCategories([category.id])}
      style={{ zIndex: 50 }}
    >
      {category.name}
    </button>
  ));
  return (
    <Layout>
      <div
        className={`${className}`}
        style={{ minHeight: '800px', marginTop: '50px' }}
      >
        <div className="page__filter">
          <ul>{categoriesView}</ul>
        </div>
        <div className="page__products">{productsView}</div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products || [],
  categories: state.categories.categories,
  isAuthenticated: state.auth.isAuthenticated,
});
export default compose(
  connect(
    mapStateToProps,
    { getAllProducts, getAllCategories, addProduct }
  ),
  withRouter,
  withStyle
)(ProductList);
