import { combineReducers } from 'redux';

import error from './error';
import categories from './categories';
import products from './products';
import cart from './cart';

export default combineReducers({
  error,
  categories,
  products,
  cart,
})
