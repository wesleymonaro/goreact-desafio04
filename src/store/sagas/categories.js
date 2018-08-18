import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as CategoriesActions } from '../ducks/categories';

export function* setCategory(action) {
  try {
    const category = action.payload.categoryId;

    const response = yield call(api.get, `/category_products/${category}`);
    // console.tron.log('teste aqui', response);

    const data = {
      products: response.data.products,
      categoryId: action.payload.categoryId,
    };

    console.log('data', data);

    yield put(CategoriesActions.setCategorySuccess(data));
  } catch (error) {
    console.tron.log(error);
    yield put(CategoriesActions.setCategoryFailure('Erro ao buscar Produtos da API'));
  }
}

export function* getCategories() {
  try {
    const categories = yield call(api.get, '/categories');
    const products = yield call(api.get, `/category_products/${categories.data[0].id}`);

    console.tron.log('categories', categories);
    console.tron.log('products', products);
    const response = {
      categories: categories.data,
      products: products.data.products,
      currentCategory: products.data.id,
    };

    yield put(CategoriesActions.getCategoriesSuccess(response));
  } catch (error) {
    yield put(CategoriesActions.getCategoriesFailure('Erro ao buscar Categorias da API'));
  }
}
