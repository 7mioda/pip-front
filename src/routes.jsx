import React, { useEffect } from 'react';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'ramda';
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
import { addHistory } from './actions/uiActions';
import UpdateProduct from './pages/admin/UpdateProduct';
import CategoriesList from './pages/admin/CategoriesList';
import AddCategory from './pages/admin/AddCategory';
import UpdateCategory from './pages/admin/UpdateCategory';
import Delivery from './pages/Delivery';
import UpdateFlashSale from './pages/admin/UpdateFlashSale';
import Payment from './pages/Payment';
import DeliveriesList from './pages/admin/DeliveriesList';
import OrdersList from './pages/admin/OrdersList';
import OrderDetails from './pages/admin/OrderDetails';

const AppRouter = ({
  isAdmin, isClient, addHistory, history,
}) => {
  useEffect(() => {
    addHistory(history);
  }, [addHistory, history]);
  return (
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
      <Route path="/plantify.it/client/cart" exact component={Cart} isAuthenticated={isClient} redirectTo="/plantify.it/" />
      <Route path="/plantify.it/client/submit-delivery/:orderId" exact component={Delivery} isAuthenticated={isClient} redirectTo="/plantify.it/" />
      <Route path="/plantify.it/client/submit-payment/:orderId" exact component={Payment} isAuthenticated={isClient} redirectTo="/plantify.it/" />
          /*--------------------- ADMIN ----------------------------*/
      <Route
        path="/plantify.it/admin-seller"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={AdminDashboard}
      />
      <Route
        path="/plantify.it/admin-seller/orders"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={OrdersList}
      />
      <Route
        path="/plantify.it/admin-seller/orders/:orderId"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={OrderDetails}
      />
      <Route
        path="/plantify.it/admin-seller/add-product"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={AddProduct}
      />
      <Route
        path="/plantify.it/admin-seller/update-product/:productId"
        component={UpdateProduct}
        redirectTo="/plantify.it/"
      />
      <Route
        path="/plantify.it/admin-seller/products"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={ProductsList}
      />
      <Route
        path="/plantify.it/admin-seller/flash-sales"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={FlashSalesList}
      />
      <Route
        path="/plantify.it/admin-seller/add-flash-sale"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={AddFlashSale}
      />
      <Route
        path="/plantify.it/admin-seller/update-flash-sale/:flashSaleId"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={UpdateFlashSale}
      />
      <Route
        path="/plantify.it/admin-seller/categories"
        exact
        isAuthenticated={isAdmin}
        redirectTo="/plantify.it/"
        component={CategoriesList}
      />
      <Route
        path="/plantify.it/admin-seller/add-category"
        exact
        redirectTo="/plantify.it/"
        isAuthenticated={isAdmin}
        component={AddCategory}
      />
      <Route
        path="/plantify.it/admin-seller/update-category/:categoryId"
        exact
        redirectTo="/plantify.it/"
        isAuthenticated={isAdmin}
        component={UpdateCategory}
      />
      <Route
        path="/plantify.it/admin-seller/deliveries"
        exact
        redirectTo="/plantify.it/"
        isAuthenticated={isAdmin}
        component={DeliveriesList}
      />
    </Switch>
  );
};
const mapStateToProps = ({ auth: { user: { roles }, isAuthenticated } }) => ({
  isAdmin: isAuthenticated && (roles.includes('SELLER')),
  isClient: isAuthenticated,
});

export default compose(withRouter, connect(mapStateToProps, { addHistory }))(AppRouter);
