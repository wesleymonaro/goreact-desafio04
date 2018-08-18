import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Product from '../pages/product';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/product/:id" component={Product} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
