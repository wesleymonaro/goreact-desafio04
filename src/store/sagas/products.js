import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ProductsActions } from '../ducks/products';

export function* getProduct(action) {
  try {
    const { data: product } = yield call(api.get, `/products/${action.payload.productId}`);

    yield put(ProductsActions.getProductSuccess(product));
  } catch (error) {
    yield put(ProductsActions.getProductFailure('Erro ao buscar Produto da API'));
  }
}
