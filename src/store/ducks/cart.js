import Imuutable from 'seamless-immutable';

export const Types = {
  ADD_REQUEST: 'cart/ADD_REQUEST',
  ADD_SUCCESS: 'cart/ADD_SUCCESS',
  ADD_FAILURE: 'cart/ADD_FAILURE',
  REMOVE_REQUEST: 'cart/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'cart/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'cart/REMOVE_FAILURE',
  CHANGE_QTDE_REQUEST: 'cart/CHANGE_QTDE_REQUEST',
  CHANGE_QTDE_SUCCESS: 'cart/CHANGE_QTDE_SUCCESS',
};

const initialState = Imuutable({
  loading: false,
  error: null,
  products: [],
  total: 0,
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case Types.ADD_SUCCESS:

      return {
        ...state,
        loading: false,
        products: action.payload.data.products,
        total: action.payload.data.total
      }

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }

    case Types.CHANGE_QTDE_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products,
        total: action.payload.data.total
      }

    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.data.products,
        total: action.payload.data.total
      }

    default: return state;
  }
}

export const Creators = {
  addProductToCartRequest: productId => ({
    type: Types.ADD_REQUEST,
    payload: { productId }
  }),

  addProductToCartSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addProductToCartFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  changeProductQtdRequest: (productId, qtd) => ({
    type: Types.CHANGE_QTDE_REQUEST,
    payload: {productId, qtd}
  }),

  changeProductQtdSuccess: data => ({
    type: Types.CHANGE_QTDE_SUCCESS,
    payload: { data }
  }),

  removeProductCartRequest : productId => ({
    type: Types.REMOVE_REQUEST,
    payload: { productId }
  }),

  removeProductCartSuccess : data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data }
  })
};
