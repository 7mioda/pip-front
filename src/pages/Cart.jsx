import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';
import Layout from './Layout';
import Summary from '../components/Cart/Summary';
import ProductList from '../components/Cart/ProductList';

import { removeProduct, updateProduct } from '../actions/cartActions';
import '../components/Cart/withStyle';

const Cart = ({
  products,
  updateProduct,
  removeProduct,
  tax,
  discount,
  checkPromoCode,
  onEnterPromoCode,
  history,
}) => (
  <Layout>
    <div style={{ marginTop: '50px', marginBottom: '50px' }}>
      {products.length > 0 ? (
        <div>
          <ProductList
            products={products}
            onChangeProductQuantity={updateProduct}
            onRemoveProduct={removeProduct}
          />

          <Summary
            products={products}
            discount={discount}
            tax={tax}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button onClick={() => history.push('/plantify.it/products')}>
            Shopping now
          </button>
        </div>
      )}
    </div>
  </Layout>
);

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

export default compose(
  connect(
    mapStateToProps,
    { removeProduct, updateProduct }
  ),
  withRouter
)(Cart);
