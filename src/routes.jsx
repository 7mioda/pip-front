import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/head" component={Header} />
    </Switch>
  </BrowserRouter>
);
