import api from '../../services/api';
import { call, put, select } from 'redux-saga/effects';

import { Creators as CartActions } from '../ducks/cart';

export function* changeQtde(action){

  let products = yield select(state => state.cart.products);

  let exists = products.filter(product => product.id === action.payload.productId);
  let index = -1;

  index = products.indexOf(exists[0]);

  const qtd = action.payload.qtd > 0 ? parseInt(action.payload.qtd) : 1;

  if (index > -1) {
    products[index].qtd = qtd;
    products[index].subtotal = products[index].qtd * products[index].price
  }

  let total = 0;

  products.forEach(product => total = total + product.subtotal);

  const data = { products, total };

  yield put(CartActions.changeProductQtdSuccess(data));
}

export function* addProductToCart(action) {
  try {
    const productId = action.payload.productId;

    const { data: response } = yield call(api.get, `/products/${productId}`);

    const newProduct = {
      id: response.id,
      image: response.image,
      name: response.name,
      brand: response.brand,
      price: response.price,
      qtd: 1,
      subtotal: response.price,
    };

    let products = yield select(state => state.cart.products);
    let exists = products.filter(product => product.id === newProduct.id);
    let index = -1;

    if (products.find(product => product.id === newProduct.id)){
      index = products.indexOf(exists[0]);
      if (index > -1) {
        products[index].qtd += 1;
        products[index].subtotal = products[index].qtd * products[index].price
      }
    } else {
      products.push(newProduct);
    }

    let total = 0;

    if (products.length > 1) {
      total = products.reduce((a, b) => a.subtotal + b.subtotal);
    } else {
      total = products[0].subtotal;
    }

    const data = { products, total };

    yield put(CartActions.addProductToCartSuccess(data));
  } catch (error) {
    console.tron.log(error);
    yield put(CartActions.addProductToCartFailure('Erro ao adicionar produto ao carrinho'));
  }
}


export function* removeProduct(action) {

  let products = yield select(state => state.cart.products);

  let exists = products.filter(product => product.id === action.payload.productId);
  let index = -1;

  index = products.indexOf(exists[0]);

  products.splice(index, 1);

  let total = 0;

  products.forEach(product => total = total + product.subtotal);

  const data = { products, total };

  yield put(CartActions.removeProductCartSuccess(data));
}
