import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesActions } from '../ducks/categories';
import { Types as ProductsActions } from '../ducks/products';
import { Types as CartActions } from '../ducks/cart';

import { getCategories, setCategory } from './categories';
import { getProduct } from './products';
import { addProductToCart, changeQtde, removeProduct } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesActions.GET_REQUEST, getCategories),
    takeLatest(CategoriesActions.SET_REQUEST, setCategory),
    takeLatest(ProductsActions.GET_REQUEST, getProduct),
    takeLatest(CartActions.ADD_REQUEST, addProductToCart),
    takeLatest(CartActions.CHANGE_QTDE_REQUEST, changeQtde),
    takeLatest(CartActions.REMOVE_REQUEST, removeProduct),
  ]);
}
