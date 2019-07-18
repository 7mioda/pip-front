import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from './components/Route';
import Home from './pages/Home';
import Help from './pages/Help';
import Blog from './pages/Blog';
import Products from './pages/Products';
import FlashSales from './pages/FlashSales';
import ProductDetails from './pages/ProductDetails';
import FlashSaleDetails from './pages/FlashSaleDetails';
import Sellers from './pages/Sellers';
import SellerDetails from './pages/SellerDetails';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProduct from './pages/admin/AddProduct';
import ProductsList from './pages/admin/ProductsList';
import FlashSalesList from './pages/admin/FlashSalesList';
import AddFlashSale from './pages/admin/AddFlashSale';
import Cart from './pages/Cart';

const AppRouter = ({ isAdmin }) => (
  <BrowserRouter>
    <Switch>
      /* --------------------- ANONYMOUS ----------------------------*/
      <Route path="/plantify.it" component={Home} exact />
      <Route path="/plantify.it/help" component={Help} />
      <Route path="/plantify.it/blog" component={Blog} />
      <Route path="/plantify.it/products" exact component={Products} />
      <Route
        path="/plantify.it/products/:productId"
        component={ProductDetails}
      />
      <Route path="/plantify.it/sellers" exact component={Sellers} />
      <Route path="/plantify.it/sellers/:sellerId" component={SellerDetails} />
      <Route path="/plantify.it/flash-sales" exact component={FlashSales} />
      <Route
        path="/plantify.it/flash-sales/:flashSaleId"
        component={FlashSaleDetails}
      />
      /* --------------------- CLIENT ----------------------------*/
      <Route path="/plantify.it/client/cart" exact component={Cart} />
      /*--------------------- ADMIN ----------------------------*/
      <Route
        path="/plantify.it/admin-seller"
        exact
        component={AdminDashboard}
      />
      <Route
        path="/plantify.it/admin-seller/add-product"
        exact
        component={AddProduct}
      />
      <Route
        path="/plantify.it/admin-seller/products"
        exact
        component={ProductsList}
      />
      <Route
        path="/plantify.it/admin-seller/flash-sales"
        exact
        component={FlashSalesList}
      />
      <Route
        path="/plantify.it/admin-seller/add-flash-sale"
        exact
        component={AddFlashSale}
      />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = ({ auth: { as: role, isAuthenticated } }) => ({
  isAdmin: isAuthenticated && (role === 'banker' || role === 'director'),
});

export default connect(mapStateToProps)(AppRouter);
