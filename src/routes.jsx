import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from './components/Route';
import Home from './pages/Home';
import Help from './pages/Help';
import Agencies from './pages/Agencies';
import Blog from './pages/Blog';

const AppRouter = ({ isAdmin }) => (
  <BrowserRouter>
    <Switch>
      /* --------------------- ANONYMOUS ----------------------------*/
      <Route path="/plantify.it" component={Home} exact />
      <Route path="/plantify.it/help" component={Help} />
      <Route path="/plantify.it/agencies-list" component={Agencies} />
      <Route path="/plantify.it/blog" component={Blog} />
      /* --------------------- CLIENT ----------------------------*/ /*
      --------------------- ADMIN ----------------------------*/
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = ({ auth: { as: role, isAuthenticated } }) => ({
  isAdmin: isAuthenticated && (role === 'banker' || role === 'director'),
});

export default connect(mapStateToProps)(AppRouter);
